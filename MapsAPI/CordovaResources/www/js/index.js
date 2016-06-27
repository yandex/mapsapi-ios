(function (global) {
    var API_URL = 'https://{subdomain}api-maps.yandex.ru/2.1-dev/?lang={lang}&mode={mode}';

    var params = JSON.parse(decodeURIComponent(location.search.match(/[\?&]params=(.+?)(?:&|$)/)[1]));
    
    function insertScript (src, onLoad) {
        var script = document.createElement('script');
        script.setAttribute('src', src);
        script.onload = onLoad;
        document.head.appendChild(script);
    }

    function onApiLoad () {
        insertScript('js/mapsapi-round-controls.js');
        insertScript('js/fs.js');
        insertScript(params.init_file);
    }
 
    var url = API_URL
            .replace('{subdomain}', params.api_enterprise ? 'enterprise.' : '')
            .replace('{lang}', params.api_lang)
            .replace('{mode}', params.api_mode)

    insertScript(url, onApiLoad);
})(window);