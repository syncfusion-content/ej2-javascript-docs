

import { ContextMenu, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
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
    }];

// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
    items: menuItems
};

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');

// Initialize Button component.
let button: Button = new Button();
// Render initialized Button.
button.appendTo('#btnElement');

// To position ContextMenu on Button click.
document.getElementById('btnElement').onclick=function() {
   menuObj.open(60, 20);
}



