

import { createElement, enableRipple } from '@syncfusion/ej2-base';
import { ContextMenu, MenuEventArgs, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';

enableRipple(true);

// Initialize menu items.
let menuItems: MenuItemModel[] = [
    {
        text: 'Save as...'
    },
    {
        text: 'View page source'
    },
    {
        text: 'Inspect'
    }];

// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
        target: '#target',
        items: menuItems,
        beforeItemRender: (args: MenuEventArgs) => {
            // To render template in li.
            let shortCutSpan: HTMLElement = createElement('span');
            let text: string = args.item.text;
            let shortCutText: string = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ?
            'Ctrl + U'      : 'Ctrl + Shift + I');
            shortCutSpan.textContent = shortCutText;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class','shortcut');
        }
    };

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');


