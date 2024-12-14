

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Unread'
    },
    {
        text: 'Has Attachments'
    },
    {
        text: 'Categorized'
    },
    {
        separator: true
    },
    {
        text: 'Important'
    },
    {
        text: 'More Filters'
    }
];

// Initialize the DropDownButton component.
let slideDownBtn: DropDownButton = new DropDownButton({
    items: items,
    animationSettings: { effect: 'SlideDown', duration: 800, easing: 'ease' }
}, '#slideDownButton');

let fadeInBtn: DropDownButton = new DropDownButton({
    items: items,
    animationSettings: { effect: 'FadeIn', duration: 800, easing: 'ease' }
}, '#fadeInButton');

let zoomInBtn: DropDownButton = new DropDownButton({
    items: items,
    animationSettings: { effect: 'ZoomIn', duration: 800, easing: 'ease' }
}, '#zoomInButton');
