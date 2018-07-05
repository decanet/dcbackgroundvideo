var cordova = require('cordova');
var exec = require('cordova/exec')

var dcbackgroundvideo = {
	startPreview : function(camera, quality, successFunction, errorFunction) {
        camera = camera || 'front';
        cordova.exec(successFunction, errorFunction, 'dcbackgroundvideo', 'startpreview', [camera, quality]);
        window.document.body.style.opacity = .99;
        setTimeout(function () {
          window.document.body.style.opacity = 1;
        }, 23)
    },
	startRecording : function(filename, duration, successFunction, errorFunction) {
		cordova.exec(successFunction, errorFunction, 'dcbackgroundvideo', 'startrecording', [filename, duration]);
	},
	stopRecording : function(successFunction, errorFunction) {
		cordova.exec(successFunction, errorFunction, 'dcbackgroundvideo', 'stop', []);
	},
    stop : function(successFunction, errorFunction) {
        cordova.exec(successFunction, errorFunction, 'dcbackgroundvideo','stop', []);
    },
};

module.exports = dcbackgroundvideo;
