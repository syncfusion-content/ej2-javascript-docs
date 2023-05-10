


import { ContextMenu, MenuItemModel, ContextMenuModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
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
        text: 'Sort By'
    },
    {
        text: 'Refresh'
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
        text: 'Display Settings'
    },
    {
        text: 'Personalize'
    }];

//ContextMenu model definition
let menuOptions: ContextMenuModel = {
    target: '#target',
    items: menuItems,
    beforeOpen: (args: BeforeOpenCloseMenuEventArgs) => {
      menuObj.enableItems(['Medium icons'], false);
    }
};

let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');

menuObj.enableItems(['Display Settings'], false);



