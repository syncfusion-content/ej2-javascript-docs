

import { Browser } from '@syncfusion/ej2-base';
import { ContextMenu, MenuEventArgs, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
import { MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To create header element.
let header: HTMLElement = document.createElement('h4');
header.textContent = 'Insert Table';

// To create table with five rows and six columns.
let table: HTMLElement = document.createElement('table');
for (let i: number = 0; i < 5; i++) {
    let row: HTMLElement = document.createElement('tr');
    table.appendChild(row);
for (let j: number = 0; j < 6; j++) {
    let col: HTMLElement = document.createElement('td');
    row.appendChild(col);
    col.setAttribute('class', 'e-border');
}
}

// Initialize menu items.
let menuItems: MenuItemModel[] = [
    {
        text: 'Cut',
        iconCss: 'e-cm-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-cm-icons e-paste'
    },
    {
        separator: true
    },
    {
        text: 'Link',
        iconCss: 'e-icons e-link'
    },
    {
        text: 'Table',
        iconCss: 'e-icons e-table',
        items: [
            {
              id: 'table'
            }
        ]
    }];

// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
    target: '#target',
    items: menuItems,
    beforeItemRender: (args: MenuEventArgs) => {
      // To append table on `li` rendering.
      if (args.item.id === 'table') {
        args.element.classList.add('bg-transparent');
        args.element.appendChild(header);
        args.element.appendChild(table);
      }
    }
};

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');


