

import { Menu, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'File',
        iconCss: 'em-icons e-file',
        items: [
            { text: 'Open', iconCss: 'em-icons e-open' },
            { text: 'Save', iconCss: 'e-icons e-save' },
            { separator: true },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        iconCss: 'em-icons e-edit',
        items: [
            { text: 'Cut', iconCss: 'em-icons e-cut' },
            { text: 'Copy', iconCss: 'em-icons e-copy' },
            { text: 'Paste', iconCss: 'em-icons e-paste' }
        ]
    },
    { text: 'Format' },
    { text: 'View' },
    { text: 'Bookmarks' },
    { text: 'Tools' },
    { separator: true },
    { text: 'Help' }
];

// Initialize Menu component.
let menuObj: Menu = new Menu({
    items: menuItems,
    beforeItemRender: (args: MenuEventArgs) => {
        if (['File', 'Open', 'Save'].indexOf(args.item.text) > -1) {
            // To underline a First character.
            let underlinedText: string = '<u>' + args.item.text.slice(0, 1) + '</u>' + args.item.text.slice(1);
            args.element.innerHTML = args.element.innerHTML.replace(args.item.text, underlinedText);
        }
    }
}, '#menu');


