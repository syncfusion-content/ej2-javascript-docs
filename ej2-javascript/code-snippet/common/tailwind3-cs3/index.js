var button = new ej.buttons.Button({
    content: 'Button', cssClass: 'e-primary'
});
button.appendTo('#element');

var root = document.documentElement;
var colorSFPrimaryBgColor = '#a5b4fc';
root.style.setProperty('--color-sf-primary-bg-color', colorSFPrimaryBgColor);
