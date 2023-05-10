

import { Record, data } from './datasource.ts';
import { ContextMenu, MenuItemModel, ContextMenuModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let record: Record;
let menuItems: MenuItemModel[] = [];

// Iterate data from 'datasource.ts' to construct menu item model.
for (let i: number = 0; i < data.length; i++) {
    record = data[i] as Record;
    if (record.parentId) {
        if (!menuItems[record.parentId - 1].items) {
            menuItems[record.parentId - 1].items = []
        }
        menuItems[record.parentId - 1].items.push({ text: record.text });
    } else {
        menuItems.push({ text: record.text });
    }
}

// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
    target: '#target',
    items: menuItems
};

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');

// To insert an item after the particular item.
menuObj.insertAfter([{separator: true}], 'Sort by');
menuObj.insertAfter([{separator: true}], 'New');



