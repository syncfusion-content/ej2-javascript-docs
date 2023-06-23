


import { ContextMenu, MenuItemModel, ContextMenuModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize menu items.
let menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    },
    {
        text: 'Add'
    },
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    }];

// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
        target: '#target .e-div',
        items: menuItems,
        beforeOpen: (args: BeforeOpenCloseMenuEventArgs) => {
          // To hide/show items on right click.
          if ((args.event.target as HTMLElement).id === 'right') {
            menuObj.hideItems(['Cut', 'Copy', 'Paste']);
            menuObj.showItems(['Add', 'Edit', 'Delete']);
          } else if ((args.event.target as HTMLElement).id === 'left') {
            menuObj.showItems(['Cut', 'Copy', 'Paste']);
            menuObj.hideItems(['Add','Edit','Delete']);
          }
        }
    };

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');



