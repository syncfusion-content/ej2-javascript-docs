

import { closest, enableRipple} from '@syncfusion/ej2-base';
import { ContextMenu, MenuEventArgs, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
import { ContextMenuModel, MenuItemModel } from '@syncfusion/ej2-navigations';
import { CheckBox } from '@syncfusion/ej2-buttons';

enableRipple(true);

// Initialize menu items.
let menuItems: MenuItemModel[] = [
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3' }
];

let i = 1;
// Initialize ContextMenu options.
let menuOptions: ContextMenuModel = {
    target: '#target',
    items: menuItems,
    beforeItemRender: (args: MenuEventArgs) => {
        // To render CheckBox component on each li.
        let checkbox: CheckBox = new CheckBox({ label: 'Option'+  i, checked: i%2 === 0 ? true : false });
        args.element.innerHTML = '';
        checkbox.appendTo('#checkbox'+i);
        let checkboxObj = document.getElementsByClassName('e-checkbox-wrapper');
        args.element.appendChild(checkboxObj[0]);
        i++;
    },
    beforeClose: (args: BeforeOpenCloseMenuEventArgs) => {
        if ((args.event.target as HTMLElement).closest('.e-menu-item')) {
            // To prevent ContextMenu close on item click.
            args.cancel = true;
        }
    },
    select: (args: MenuEventArgs) => {
        let selectedElem: NodeList = args.element.parentElement.querySelectorAll('.e-selected');
        for (let i:number=0; i < selectedElem.length; i++) {
           let ele: Element = selectedElem[i] as Element;
           ele.classList.remove('e-selected');
        }
        let checkbox: HTMLElement = args.element.childNodes[0] as HTMLElement;
        let frame: Element = checkbox.querySelector('.e-frame');
        if (checkbox && frame.classList.contains('e-check')) {
            frame.classList.remove('e-check');
        } else if (checkbox) {
            frame.classList.add('e-check');
        }
    }
};

let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu');


