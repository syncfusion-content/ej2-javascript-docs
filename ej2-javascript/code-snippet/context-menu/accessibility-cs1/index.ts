

import { ContextMenu, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize menu items.
let menuItems: MenuItemModel[] = [
    {
        text: 'Cut',
        iconCss: 'e-db-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-db-icons e-paste',
        items: [
            {
                text: 'Paste Text',
                iconCss: 'e-cm-icons e-pastetext'
            },
            {
                text: 'Paste Special',
                iconCss: 'e-cm-icons e-pastespecial'
            } ]
    }];

// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
        items: menuItems,
        target: '#target'
    };

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');

// To open ContextMenu at specified position.
menuObj.open(40, 20);



