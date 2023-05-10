

import { ContextMenu, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize menu items.
let menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
        target: '#target',
        items: menuItems
    };

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');


