

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
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

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({
    items: items,
    popupWidth: '200px'
}, '#element');
