ej.base.enableRipple(true);

//Name and Value attribute in form submit.
var radiobutton = new ej.buttons.RadioButton({label: 'Credit/Debit Card', name: 'payment', value: 'credit/debit', checked: true});
radiobutton.appendTo('#radiobutton1');

radiobutton = new ej.buttons.RadioButton({label: 'Net Banking', name: 'payment', value: 'netbanking'});
radiobutton.appendTo('#radiobutton2');

radiobutton = new ej.buttons.RadioButton({label: 'Cash on Delivery', name: 'payment', value: 'cashondelivery'});
radiobutton.appendTo('#radiobutton3');

radiobutton = new ej.buttons.RadioButton({label: 'Others', name: 'payment', value: 'others'});
radiobutton.appendTo('#radiobutton4');

var button = new ej.buttons.Button({ isPrimary: true });
button.appendTo('#btnElement');

