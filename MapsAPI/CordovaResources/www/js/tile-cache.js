ymaps.modules.define('tileCache', [
    'vow', 'util.imageLoader', 'fs.cache'
], function (provide, vow, imageLoader, fsCache) {
    var CACHE_DURATION = 7 * 24 * 60 * 60 * 1e3, // 1 week.
        RE_TILE_HOST = /vec\d+\.maps\.yandex\.net\//; // TODO ym.env.layers

    provide({});

    if (typeof imageLoader.proxy != 'object') {
        return;
    }

    imageLoader.proxy.add({
        // TODO matchUrl -> match; 1 -> true
        matchUrl: function (url) {
            return !!url.match(RE_TILE_HOST);
        },
        load: function (url) {
            return fsCache.fetchLocalUrl(url, 'image/jpeg', CACHE_DURATION, getPath(url))
                .fail(function () { return url; });
        }
    });

    function getPath (url) {
        return [
            'tiles',
            'x' + url.match(/x=(\d{1,2})/)[1],
            'y' + url.match(/y=(\d{1,2})/)[1],
            url.replace(RE_TILE_HOST, '').replace(/^\w+:\/\//, '').replace(/[^\w]/g, '_')
        ].join('/');
    }
});
