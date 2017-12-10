cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-gpslocation.Coordinates",
    "file": "plugins/cordova-plugin-gpslocation/www/Coordinates.js",
    "pluginId": "cordova-plugin-gpslocation",
    "clobbers": [
      "Coordinates"
    ]
  },
  {
    "id": "cordova-plugin-gpslocation.PositionError",
    "file": "plugins/cordova-plugin-gpslocation/www/PositionError.js",
    "pluginId": "cordova-plugin-gpslocation",
    "clobbers": [
      "PositionError"
    ]
  },
  {
    "id": "cordova-plugin-gpslocation.Position",
    "file": "plugins/cordova-plugin-gpslocation/www/Position.js",
    "pluginId": "cordova-plugin-gpslocation",
    "clobbers": [
      "Position"
    ]
  },
  {
    "id": "cordova-plugin-gpslocation.GPSLocation",
    "file": "plugins/cordova-plugin-gpslocation/www/GPSLocation.js",
    "pluginId": "cordova-plugin-gpslocation",
    "clobbers": [
      "window.GPSLocation"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-camera": "3.0.0",
  "cordova-plugin-gpslocation": "1.0.0"
};
// BOTTOM OF METADATA
});