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

//To place the icon in SplitButton.
var splitBtn = new ej.splitbuttons.SplitButton({iconCss: 'e-sb-icons e-paste', items: items}, '#iconbutton');
var splitBtn = new ej.splitbuttons.SplitButton({ iconCss: 'e-sb-icons e-paste', items: items, iconPosition: "Top" }, '#iconpstn');

