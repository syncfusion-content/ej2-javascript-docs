ej.base.enableRipple(true);

var items = [
    {
        text: 'Find'
    },
    {
        text: 'Replace'
    },
    {
        text: 'Go To'
    },
    {
        text: 'Go To Special'
    }];

// To initialize DropDownButton with `e-custom` class.
var drpDownBtn = new ej.splitbuttons.DropDownButton({ 
    iconCss: 'e-icons e-search',
    cssClass: 'e-custom',
    items: items,
    iconPosition: 'Top'
    }, '#iconbutton'
);

