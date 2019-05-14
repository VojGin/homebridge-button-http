
# Plugin for controlling buttons over http input

Example config.json:

```
    "accessories": [
        {
          "accessory": "HttpButton",
          "name": "Button",
          "port": 4321
        }   
    ]

```

This plugin allows you to controll buttons in Homebridge remotly via http. The plugin opens up a web server. The button can be activated by calling
```
http://<server-ip>:port/set/1
```
and deactivated by calling
```
http://<server-ip>:port/set/0
```

For each instance of the plugin, so for each button, an new server has to be opened on a different port, so set the ports accordingly in the config.json.

### Installation
To install this plugin on your machine, please do
```
sudo npm install -g VojGin/homebridge-button-http
```

### Use case
I designed this plugin so you can use a regular button connected to an Arduino, ESP32, ESP8266 or Raspberry Pi to controll a button in Homebridge. If you use an Apple TV or iPad as a controller, you could set automatic to the button, such as turning a lamp on and off.
Of course, it is possible to adopt the plugin to other use cases.