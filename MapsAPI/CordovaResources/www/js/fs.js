ymaps.modules.define('fs', ['vow'], function (provide, vow) {
    function open (dir, name, params) {
        if (!dir || !name) {
            return vow.reject('No source directory or name specified');
        }

        if (typeof resolveLocalFileSystemURL != 'function') {
            return vow.reject('No access to file system');
        }

        return new vow.Promise(function (resolve, reject) {
            resolveLocalFileSystemURL(dir, function (sourceDir) {
                sourceDir.getFile(name, params, resolve, reject);
            }, reject);
        });
    }

    function create (dir, name, data) {
        return open(dir, name, { create: true, exclusive: false }).then(function (file) {
            return new vow.Promise(function (resolve, reject) {
                file.createWriter(function (fileWriter) {
                    if (typeof data == 'string') {
                        data = new Blob([data], { type: 'text/plain' });
                    }

                    fileWriter.onwrite = function () { resolve(file); };
                    fileWriter.onerror = reject;
                    fileWriter.write(data);
                }, reject);
            });
        });
    }
    
    function info (dir, name) {
        return open(dir, name, { create: false, exclusive: false }).then(function (file) {
            return new vow.Promise(function (resolve, reject) {
                file.file(resolve, reject);
            });
        });
    }

    function read (dir, name, readAs) {
        return info(dir, name).then(function (fileInfo) {
            return new vow.Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function () { resolve(this.result); };
                reader.onerror = reject;
    
                switch (readAs) {
                    case 'arrayBuffer': reader.readAsArrayBuffer(fileInfo); break;
                    case 'binaryString': reader.readAsBinaryString(fileInfo); break;
                    default: reader.readAsText(fileInfo);
                }
            });
        });
    }

    provide({
        open: open,
        create: create,
        info: info,
        read: read
    });
});

ymaps.modules.define('fs.cache', ['fs', 'vow'], function (provide, fs, vow) {
    var CACHE_DIR = cordova.file.cacheDirectory;

    function download (url, name, mimeType) {
        return new vow.Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(fs.create(CACHE_DIR, name, new Blob([this.response], { type: mimeType })));
                } else {
                    reject('Download status: ' + this.status);
                }
            };
            xhr.onerror = reject;
            xhr.send();
        });
    }

    function fetch (name, url, mimeType, cacheDuration) {
        if (typeof cacheDuration == 'undefined') {
            cacheDuration = Infinity;
        }

        return fs.info(CACHE_DIR, name)
            .then(function (fileInfo) {
                return (+new Date() - fileInfo.lastModifiedDate < cacheDuration) ?
                    fs.open(CACHE_DIR, name) :
                    download(url, name, mimeType);
            })
            .fail(function () {
                return download(url, name, mimeType);
            })
    }

    provide({
        fetch: fetch
    })
});
