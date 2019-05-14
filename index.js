'use strict'

var Service, Characteristic

module.exports = function (homebridge) {

  Service = homebridge.hap.Service
  Characteristic = homebridge.hap.Characteristic

  homebridge.registerAccessory('homebridge-button-http', 'HttpButton', HttpButton)
}

function HttpButton(log, config) {
  this.log = log
  this.name = config.name
  this.port = config.port
  this._service = new Service.StatelessProgrammableSwitch(this.name)

  var that = this

  var express = require('express')
  var app = express()


  app.get('/set/0', function (req, res, next) {
    this._service.notifyCharacteristic(Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS)
    res.sendStatus(200)
  })

  app.get('/set/1', function (req, res, next) {
    this._service.notifyCharacteristic(Characteristic.ProgrammableSwitchEvent.DOUBLE_PRESS)
    res.sendStatus(200)
  })

  app.get('/set/2', function (req, res, next) {
    this._service.notifyCharacteristic(Characteristic.ProgrammableSwitchEvent.LONG_PRESS)
    res.sendStatus(200)
  })

  var server = app.listen(this.port, function () {
    var host = server.address().address
    var port = server.address().port
    that.log('app listening at', host, port)
  })
}

HttpButton.prototype.getServices = function () {
  return [this._service]
}