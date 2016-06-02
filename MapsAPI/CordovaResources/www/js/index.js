ymaps.ready(['layer.tileContainer.CanvasContainer', 'map.metaOptions']).then(function (ym) {
    ymaps.map.metaOptions.set('groundPaneViewportMargin', 600);
                                                                             
    var map = window.myMap = new ym.Map('map', {
            center: [55.74524234796502,37.586730756347656],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',
                                        
            layerTilePositionEngine: 'css3-3d',
            layerTileAnimateOpacity: false,
            avoidFractionalZoom: true,
            layerWebglEnabled: false,
            dragInertiaDuration: 'auto',
            dragInertiaMinDistance: 0
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
    map.geoObjects.add(geoObject);

    setupControls(map);

}, function (err) {
	alert('Error: ' + err);
});

function setupControls (map) {
    var typeSelector = new ymaps.control.TypeSelector({
            options: {
                layout: 'round#listBoxLayout',
                itemLayout: 'round#listBoxItemLayout',
                itemSelectableLayout: 'round#listBoxItemSelectableLayout',
                position: {
                    right: 20,
                    bottom: 375
                }
            }
        }),
        geolocationControl = new ymaps.control.GeolocationControl({ options: {
            layout: 'round#buttonLayout',
            position: {
                right: 20,
                bottom: 312
            }
        }}),
        zoomControl = new ymaps.control.ZoomControl({ options: {
            layout: 'round#zoomLayout',
            position: {
                right: 20,
                bottom: 200
            }
        }});

    myMap.controls
        .add(typeSelector)
        .add(geolocationControl)
        .add(zoomControl);
}