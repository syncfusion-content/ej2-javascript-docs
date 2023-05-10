

import { Menu, MenuItemModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'Events',
        items: [
            { text: 'Conferences' },
            { text: 'Music' },
            { text: 'Workshops' }
        ]
    },
    {
        text: 'Movies',
        items: [
            { text: 'Now Showing' },
            { text: 'Coming Soon' }
        ]
    },
    {
        text: 'Directory',
        items: [
            { text: 'Media Gallery' },
            { text: 'Newsletters' }
        ]
    },
    {
        text: 'Queries',
        items: [
            { text: 'Our Policy' },
            { text: 'Site Map' }
        ]
    },
    { text: 'Services' }
];

// Initialize Menu component.
let menuObj: Menu = new Menu({
    items: menuItems,
    beforeOpen: (args: BeforeOpenCloseMenuEventArgs) => {
        //Handling sub menu items
        for (let i: number = 0; i  < args.items.length; i++) {
            if (disableItems.indexOf(args.items[i].text) > -1) {
                menuObj.enableItems([args.items[i].text], false, false);
            }
        }
    }
}, '#menu');

let disableItems: string[] = ['Conferences', 'Music', 'Directory'];

//Disable items
menuObj.enableItems(disableItems, false, false);

let buttonObj: Button = new Button();
buttonObj.appendTo('#enableAll');

buttonObj.element.onclick = (): void => {
    menuObj.enableItems(disableItems, true, false);
    disableItems = [];
}


