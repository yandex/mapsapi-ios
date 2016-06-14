ymaps.ready(['map.metaOptions']).then(function (ymaps) {
    ymaps.map.metaOptions.set('groundPaneViewportMargin', 600);
                                                                             
    var map = new ymaps.Map('map', {
            center: [55.74524234796502, 37.586730756347656],
            zoom: 12,
            controls: []
        }, {
            layerTilePositionEngine: 'css3-3d',
            dragInertiaDuration: 'auto',
            dragInertiaMinDistance: 0,
                                        
            layerTileAnimateOpacity: false,
            avoidFractionalZoom: false,
            layerWebglEnabled: false
        }),
        geoObject = new ymaps.Placemark(map.getCenter(), {
            iconContent: 'Go here',
            balloonContent: 'Lorem ipsum dolor sit amet'
        }, {
            preset: 'islands#redStretchyIcon'
        });

    map.geoObjects.add(geoObject);

    setupControls(map);
}).fail(function (err) {
    console.err(err);
});

function setupControls (map) {
    var typeSelector = new ymaps.control.TypeSelector({
            options: {
                layout: 'round#listBoxLayout',
                itemLayout: 'round#listBoxItemLayout',
                itemSelectableLayout: 'round#listBoxItemSelectableLayout',
                position: {
                    right: 20,
                    bottom: 326
                }
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({ options: {
            layout: 'round#zoomLayout',
            position: {
                right: 20,
                bottom: 216
            }
        }}),
        geolocationControl = new ymaps.control.GeolocationControl({ options: {
            layout: 'round#buttonLayout',
            position: {
                right: 20,
                bottom: 150
            }
        }});

    map.controls
        .add(typeSelector)
        .add(geolocationControl)
        .add(zoomControl);
}