ej.base.enableRipple(true);

var items = [
    {
        text: 'Autosum'
    },
    {
        text: 'Average'
    },
    {
        text: 'Count numbers',
    },
    {
        text: 'Min'
    },
    {
        text: 'Max'
    }];

//To disable the SplitButton.
var splitBtn = new ej.splitbuttons.SplitButton({iconCss: 'e-sb e-sigma', items: items, disabled: true}, '#iconbutton');

