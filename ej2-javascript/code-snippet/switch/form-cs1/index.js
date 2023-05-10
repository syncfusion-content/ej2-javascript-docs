ej.base.enableRipple(true);

//Name and Value attribute in form submit.
var switchObj = new ej.buttons.Switch({ name: 'Tethering',  value: 'USB', checked: true });
switchObj.appendTo('#switch1');

switchObj = new ej.buttons.Switch({ name: 'Hotspot',  value: 'Wi-Fi', checked: true });
switchObj.appendTo('#switch2');

switchObj = new ej.buttons.Switch({ name: 'Tethering',  value: 'Bluetooth', disabled: true });
switchObj.appendTo('#switch3');

var button = new ej.buttons.Button({ isPrimary: true });
button.appendTo('#btnElement');

