ej.base.enableRipple(true);

//Initialize action items.
var items = [
    {
        text: 'Selection',
        iconCss: 'e-icons e-list-unordered'
    },
    {
        text: 'Yes / No',
        iconCss: 'e-icons e-check-box',
    },
    {
        text: 'Text',
        iconCss: 'e-icons e-caption'
    },
    {
        text: 'None',
        iconCss: 'e-icons e-mouse-pointer'
    },
];

// initialize DropDownButton component
var drpDownBtn = new ej.splitbuttons.DropDownButton({
    items: items,
    popupWidth: '200px'
}, '#element');
