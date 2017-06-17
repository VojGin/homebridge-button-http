"use strict";

var Service, Characteristic;

module.exports = function(homebridge) {

  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-switch-http", "HttpSwitch", HttpSwitch);
}

function HttpSwitch(log, config) {
  this.log = log;
  this.name = config.name;
  this.port = config.port;
  this.onStatus = false;

  this._service = new Service.Switch(this.name);
  this._service.getCharacteristic(Characteristic.On)
    .on('set', this._setOn.bind(this));
	
  var that = this;

  var express = require('express');
  var app = express();
 
  
  app.get('/set/1', function (req, res, next) {
	  that.onStatus = true;
	  that._service.setCharacteristic(Characteristic.On, true);
	  res.sendStatus(200);
	});

	app.get('/set/0', function (req, res, next) {
	  that.onStatus = false;
	  that._service.setCharacteristic(Characteristic.On, false);
	  res.sendStatus(200);
	});

	var server = app.listen(this.port, function () {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('app listening at', host, port);
	});
}

HttpSwitch.prototype.getServices = function() {
  return [this._service];
}

HttpSwitch.prototype._setOn = function(on, callback) {

  this.log("Setting switch to " + on);

  callback();
}
