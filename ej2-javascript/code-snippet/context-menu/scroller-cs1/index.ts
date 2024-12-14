

import { ContextMenu, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//ContextMenu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'View',
        items: [
            {
                text: 'Mobile'
            },
            {
                text: 'Desktop Smaller'
            },
            {
                text: 'Desktop Normal'
            },
            {
                text: 'Desktop Bigger Smaller'
            },
            {
                text: 'Desktop Bigger Normal'
            }
        ]
    },
    {
        text: 'Refresh'
    },
    {
        text: 'Paste'
    },
    {
        separator: true
    },
    {
        text: 'New'
    },
    {
        text: 'Personalize'
    }
];

let menuObj: ContextMenu = new ContextMenu({
    target: '#target',
    items: menuItems,
    enableScrolling: true,
    beforeOpen: (args: MenuEventArgs) => {
        args.element.parentElement.style.height = '150px';
    }
}, '#contextmenu');