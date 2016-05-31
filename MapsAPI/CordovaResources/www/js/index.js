ymaps.ready(['layer.tileContainer.CanvasContainer', 'map.metaOptions']).then(function (ym) {
    ymaps.map.metaOptions.set('groundPaneViewportMargin', 600);
                                                                             
    var map = window.myMap = new ym.Map('map', {
            center: [55.74524234796502,37.586730756347656],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search',
                                        
            layerTilePositionEngine: 'css3-3d',
            layerTileAnimateOpacity: false,
            avoidFractionalZoom: true,
            layerWebglEnabled: false
        }),
        geoObject = new ym.Placemark(map.getCenter(), {
            iconContent: 'mapsapi-ios',
            balloonContent: 'FUCK YEAH.',
            hintContent: 'omg!'
        }, {
            draggable: true,
            preset: 'islands#redStretchyIcon'
        });

    map.controls.options.set('margin', 20);
    map.controls.add('routeEditor');
    map.geoObjects.add(geoObject);
}, function (err) {
	alert('Error: ' + err);
});