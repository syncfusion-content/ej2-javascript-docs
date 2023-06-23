

import { ContextMenu, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//ContextMenu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'View',
        items: [
          {
            text: 'Large icons'
          },
          {
            text: 'Medium icons'
          },
          {
            text: 'Small icons'
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
        separator: true
    },
    {
        text: 'Personalize'
    }];

//ContextMenu model definition
let menuOptions: ContextMenuModel = {
    target: '#target',
    items: menuItems
};

let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');

menuObj.insertAfter([{text: 'Sort By'}] , 'Refresh');
menuObj.insertBefore([{text: 'Display Settings'}] , 'Personalize');
menuObj.removeItems(['Paste']);



