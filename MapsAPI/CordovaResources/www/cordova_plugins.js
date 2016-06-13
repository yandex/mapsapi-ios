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
        // {
        //     "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        //     "id": "cordova-plugin-console.console",
        //     "pluginId": "cordova-plugin-console",
        //     "clobbers": [
        //         "console"
        //     ]
        // },
        {
            "file": "plugins/cordova-plugin-console/www/logger.js",
            "id": "cordova-plugin-console.logger",
            "pluginId": "cordova-plugin-console",
            "clobbers": [
                "cordova.logger"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
            "id": "cordova-plugin-file.DirectoryEntry",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.DirectoryEntry"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
            "id": "cordova-plugin-file.DirectoryReader",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.DirectoryReader"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/Entry.js",
            "id": "cordova-plugin-file.Entry",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Entry"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/File.js",
            "id": "cordova-plugin-file.File",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.File"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileEntry.js",
            "id": "cordova-plugin-file.FileEntry",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileEntry"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileError.js",
            "id": "cordova-plugin-file.FileError",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileError"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileReader.js",
            "id": "cordova-plugin-file.FileReader",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileReader"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileSystem.js",
            "id": "cordova-plugin-file.FileSystem",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileSystem"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
            "id": "cordova-plugin-file.FileUploadOptions",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileUploadOptions"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
            "id": "cordova-plugin-file.FileUploadResult",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileUploadResult"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileWriter.js",
            "id": "cordova-plugin-file.FileWriter",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileWriter"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/Flags.js",
            "id": "cordova-plugin-file.Flags",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Flags"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
            "id": "cordova-plugin-file.LocalFileSystem",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.LocalFileSystem"
            ],
            "merges": [
                "window"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/Metadata.js",
            "id": "cordova-plugin-file.Metadata",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Metadata"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
            "id": "cordova-plugin-file.ProgressEvent",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.ProgressEvent"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/fileSystems.js",
            "id": "cordova-plugin-file.fileSystems",
            "pluginId": "cordova-plugin-file"
        },
        {
            "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
            "id": "cordova-plugin-file.requestFileSystem",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.requestFileSystem"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
            "id": "cordova-plugin-file.resolveLocalFileSystemURI",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "window"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
            "id": "cordova-plugin-file.iosFileSystem",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "FileSystem"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
            "id": "cordova-plugin-file.fileSystems-roots",
            "pluginId": "cordova-plugin-file",
            "runs": true
        },
        {
            "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
            "id": "cordova-plugin-file.fileSystemPaths",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "cordova"
            ],
            "runs": true
        }
    ];
    module.exports.metadata =
// TOP OF METADATA
    {

    }
// BOTTOM OF METADATA
});