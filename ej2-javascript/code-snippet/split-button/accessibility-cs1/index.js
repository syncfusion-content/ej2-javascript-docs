ej.base.enableRipple(true);

var items = [
    {
        text: 'Cut',
        iconCss: 'e-sb-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-sb-icons e-paste'
    }];

//To place the icon in SplitButton.
var splitBtn = new ej.splitbuttons.SplitButton({iconCss: 'e-sb-icons e-paste', items: items}, '#iconbutton');

