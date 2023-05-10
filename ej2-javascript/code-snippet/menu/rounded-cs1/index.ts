

import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'File',
        items: [
            { text: 'Open' },
            { text: 'Save' },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }
        ]
    },
    {
        text: 'View',
         items: [
                {
                    text: 'Toolbars',
                    items: [
                        { text: 'Menu Bar' },
                        { text: 'Bookmarks Toolbar' },
                        { text: 'Customize' },
                    ]
                },
                {
                    text: 'Zoom',
                    items: [
                        { text: 'Zoom In' },
                        { text: 'Zoom Out' },
                        { text: 'Reset' },
                    ]
                },
                { text: 'Full Screen' }
            ],
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }
        ]
    },
    { text: 'Go' },
    { text: 'Help' }
];

new Menu({ items: menuItems, cssClass: 'e-rounded-menu', showItemOnClick: true }, '#menu');


