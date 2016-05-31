cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
        {
            "file": "plugins/cordova-plugin-device/www/device.js",
            "id": "cordova-plugin-device.device",
            "pluginId": "cordova-plugin-device",
            "clobbers": [
                "device"
            ]
        },
        {
            "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
            "id": "cordova-plugin-device-motion.Acceleration",
            "pluginId": "cordova-plugin-device-motion",
            "clobbers": [
                "Acceleration"
            ]
        },
        {
            "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
            "id": "cordova-plugin-device-motion.accelerometer",
            "pluginId": "cordova-plugin-device-motion",
            "clobbers": [
                "navigator.accelerometer"
            ]
        },
        {
            "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
            "id": "cordova-plugin-device-orientation.CompassError",
            "pluginId": "cordova-plugin-device-orientation",
            "clobbers": [
                "CompassError"
            ]
        },
        {
            "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
            "id": "cordova-plugin-device-orientation.CompassHeading",
            "pluginId": "cordova-plugin-device-orientation",
            "clobbers": [
                "CompassHeading"
            ]
        },
        {
            "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
            "id": "cordova-plugin-device-orientation.compass",
            "pluginId": "cordova-plugin-device-orientation",
            "clobbers": [
                "navigator.compass"
            ]
        },
        {
            "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
            "id": "cordova-plugin-geolocation.Coordinates",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "Coordinates"
            ]
        },
        {
            "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
            "id": "cordova-plugin-geolocation.PositionError",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "PositionError"
            ]
        },
        {
            "file": "plugins/cordova-plugin-geolocation/www/Position.js",
            "id": "cordova-plugin-geolocation.Position",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "Position"
            ]
        },
        {
            "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
            "id": "cordova-plugin-geolocation.geolocation",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "navigator.geolocation"
            ]
        },
        {
            "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
            "id": "cordova-plugin-globalization.GlobalizationError",
            "pluginId": "cordova-plugin-globalization",
            "clobbers": [
                "window.GlobalizationError"
            ]
        },
        {
            "file": "plugins/cordova-plugin-globalization/www/globalization.js",
            "id": "cordova-plugin-globalization.globalization",
            "pluginId": "cordova-plugin-globalization",
            "clobbers": [
                "navigator.globalization"
            ]
        },
        {
            "file": "plugins/cordova-plugin-network-information/www/network.js",
            "id": "cordova-plugin-network-information.network",
            "pluginId": "cordova-plugin-network-information",
            "clobbers": [
                "navigator.connection",
                "navigator.network.connection"
            ]
        },
        {
            "file": "plugins/cordova-plugin-network-information/www/Connection.js",
            "id": "cordova-plugin-network-information.Connection",
            "pluginId": "cordova-plugin-network-information",
            "clobbers": [
                "Connection"
            ]
        },
        {
            "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
            "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
            "pluginId": "cordova-plugin-wkwebview-engine",
            "clobbers": [
                "cordova.exec"
            ]
        },
        {
            "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
            "id": "cordova-plugin-console.console",
            "pluginId": "cordova-plugin-console",
            "clobbers": [
                "console"
            ]
        },
        {
            "file": "plugins/cordova-plugin-console/www/logger.js",
            "id": "cordova-plugin-console.logger",
            "pluginId": "cordova-plugin-console",
            "clobbers": [
                "cordova.logger"
            ]
        }
    ];
    module.exports.metadata =
// TOP OF METADATA
    {

    }
// BOTTOM OF METADATA
});