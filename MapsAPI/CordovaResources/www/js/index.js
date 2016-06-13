ymaps.ready(['map.metaOptions', 'fs.cache']).then(function (ym) {
                                                                             
    ymaps.map.metaOptions.set('groundPaneViewportMargin', 600);
                                                                             
    var map = window.myMap = new ym.Map('map', {
            center: [55.74524234796502, 37.586730756347656],
            zoom: 12,
            controls: []
        }, {
            layerTilePositionEngine: 'css3-3d',
            dragInertiaDuration: 'auto',
            dragInertiaMinDistance: 0,
                                        
            layerTileAnimateOpacity: false,
            avoidFractionalZoom: false,
            layerWebglEnabled: false,
        }),
        geoObject = new ym.Placemark(map.getCenter(), {
            iconContent: 'Go here',
            balloonContent: 'Lorem ipsum dolor sit amet'
        }, {
            preset: 'islands#redStretchyIcon'
        });

    map.geoObjects.add(geoObject);

    setupControls(map);
    testFs();

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

    myMap.controls
        .add(typeSelector)
        .add(geolocationControl)
        .add(zoomControl);
}

function testFs () {
    ymaps.fs.cache.fetch('logo.png', 'https://yastatic.net/morda-logo/i/bender/logo.png', 'image/png')
        .then(function (file) {
            document.body.innerHTML = '<img src="' + file.toURL() + '" />';
        })
        .fail(console.error, console);
}