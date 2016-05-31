ymaps.ready().then(function (ym) {
    var map = window.myMap = new ym.Map('map', {
            center: [55.74524234796502,37.586730756347656],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),
        geoObject = new ym.Placemark(map.getCenter(), {
            iconContent: 'mapsapi-ios',
            balloonContent: 'FUCK YEAH.',
            hintContent: 'omg!'
        }, {
            draggable: true,
            preset: 'islands#redStretchyIcon'
        });

    map.controls.add('routeEditor');
    map.geoObjects.add(geoObject);
}, function (err) {
	alert('Error: ' + err);
});	