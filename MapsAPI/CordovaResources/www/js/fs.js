ymaps.modules.define('fs', ['vow'], function (provide, vow) {
    function open (dir, path, params) {
        if (!dir || !path) {
            return vow.reject('No source directory or path specified');
        }

        params || (params = {});

        if (typeof resolveLocalFileSystemURL != 'function') {
            return vow.reject('No access to file system');
        }

        return new vow.Promise(function (resolve, reject) {
            resolveLocalFileSystemURL(dir, function (sourceDir) {
                function getFile () {
                    sourceDir.getFile(path, params, resolve, reject);
                }

                if (params.createPath) {
                    createPathRecursive(sourceDir, path.split('/').slice(0, -1), getFile, reject);
                } else {
                    getFile();
                }
            }, reject);
        });
    }

    function create (dir, path, data) {
        return open(dir, path, { create: true, exclusive: false, createPath: true }).then(function (file) {
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
    
    function info (dir, path) {
        return open(dir, path, { create: false, exclusive: false }).then(function (file) {
            return new vow.Promise(function (resolve, reject) {
                file.file(resolve, reject);
            });
        });
    }

    function read (dir, path, readAs) {
        return info(dir, path).then(function (fileInfo) {
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

    function createPathRecursive (dir, path, onSuccess, onFailure) {
        if (!path.length) {
            onSuccess();
            return;
        }

        dir.getDirectory(path.shift(), { create: true }, function (child) {
            createPathRecursive(child, path, onSuccess, onFailure);
        }, onFailure);
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

    function download (url, path, mimeType) {
        return new vow.Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(fs.create(CACHE_DIR, path, new Blob([this.response], { type: mimeType })));
                } else {
                    reject('Download status: ' + this.status);
                }
            };
            xhr.onerror = reject;
            xhr.send();
        });
    }

    function fetchFile (url, mimeType, cacheDuration, path) {
        if (typeof cacheDuration == 'undefined') {
            cacheDuration = Infinity;
        }

        if (!path) {
            path = url.replace(/[^\w]/ig, '_');
        }

        return fs.info(CACHE_DIR, path)
            .then(function (fileInfo) {
                return (+new Date() - fileInfo.lastModifiedDate < cacheDuration) ?
                    fs.open(CACHE_DIR, path) :
                    download(url, path, mimeType);
            }, function () {
                return download(url, path, mimeType);
            });
    }

    function fetchAndRead (url, mimeType, cacheDuration, path) {
    }

    function fetchLocalUrl (url, mimeType, cacheDuration, path) {
        return fetchFile(url, mimeType, cacheDuration, path)
            .then(function (file) {
                return file.toURL();
            });
    }

    provide({
        fetch: fetchAndRead,
        fetchLocalUrl: fetchLocalUrl
    });
});
