ymaps.ready(['native']).then(function (ymaps, native) {

    var map = new ymaps.Map('map', {
            center: [55.7452, 37.5867],
            zoom: 12,
            controls: native.controls
        }),
        
        geoObject = new ymaps.Placemark(map.getCenter(), {
            iconContent: 'Go here',
            balloonContent: 'Lorem ipsum dolor sit amet'
        }, {
            preset: 'islands#redStretchyIcon'
        });

    map.geoObjects.add(geoObject);

}).fail(console.error, console);