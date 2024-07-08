var button = new ej.buttons.Button({
    content: 'Button', cssClass: 'e-primary'
});
button.appendTo('#element');

var root = document.documentElement;
var colorSFPprimary = '#8d969e';
root.style.setProperty('--color-sf-primary', colorSFPrimary);
