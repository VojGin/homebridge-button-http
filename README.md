
# Plugin for controlling switches over http input

Example config.json:

```
    "accessories": [
        {
          "accessory": "HttpSwitch",
          "name": "Switch"
          "port": 4321
        }   
    ]

```

This plugin allows you to controll switches in Homebridge remotly via http. The plugin opens up a web server. The switch can be activated by calling
```
http://<server-ip>:port/set/1
```
and deactivated by calling
```
http://<server-ip>:port/set/0
```

For each instance of the plugin, so for each switch, an new server has to be opened on a different port, so set the ports accordingly in the config.json.

### Installation
To install this plugin on your machine, please do
```
sudo npm install -g JonesfromHan/homebridge-switch-http
```

### Use case
I designed this plugin so you can use a regular switch connected to an Arduino, ESP32, ESP8266 or Raspberry Pi to controll a switch in Homebridge. If you use an Apple TV or iPad as a controller, you could set automatic to the switch, such as turning a lamp on and off.
Of course, it is possible to adopt the plugin to other use cases.

### TODO
* Add an option to listen only to localhost
* Other ideas?