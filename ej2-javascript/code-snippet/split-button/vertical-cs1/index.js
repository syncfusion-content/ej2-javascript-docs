ej.base.enableRipple(true);

var items = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

//To position the icon to the top of the text on a SplitButton.
var splitBtn = new ej.splitbuttons.SplitButton({iconCss: 'e-sb-icons e-paste', items: items, cssClass: 'e-vertical', iconPosition: 'Top'}, '#iconbutton');

