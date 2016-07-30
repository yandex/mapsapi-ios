(function (global) {
    loadApi();

    function loadApi () {
        var params = JSON.parse(decodeURIComponent(location.search.match(/[\?&]params=(.+?)(?:&|$)/)[1])),
            url = 'https://{subdomain}api-maps.yandex.ru/{version}/?{params}'
                .replace('{subdomain}', params.api_enterprise ? 'enterprise.' : '')
                .replace('{version}', params.api_version)
                .replace('{params}', toQueryParams(params.api_params));

        insertScript(url, function () {
            insertScript('js/modules/modules.js');
            insertScript('js/modules/mapsapi-round-controls.js');
            insertScript('js/modules/native.js');
            insertScript(params.init_file);
        });
    }

    function toQueryParams (params) {
        return Object.keys(params).map(function (key) {
            return key + '=' + encodeURIComponent(params[key]);
        }).join('&');
    }
    
    function insertScript (src, onLoad) {
        var script = document.createElement('script');
        script.setAttribute('src', src);
        script.onload = onLoad;
        document.head.appendChild(script);
    }

})(window);