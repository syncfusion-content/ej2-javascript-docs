

import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { DropDownButton, BeforeOpenCloseMenuEventArgs, OpenCloseMenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let colorPicker: ColorPicker = new ColorPicker(
    {
        inline: true,
        change: (args: ColorPickerEventArgs): void => {
            (ddb.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.rgba;
            closePopup();
        }
    },
    '#element');

let ddb: DropDownButton = new DropDownButton(
    {
        target: ".e-colorpicker-wrapper",
        iconCss: "e-dropdownbtn-preview",
        beforeClose: (args: BeforeOpenCloseMenuEventArgs): void => {
            args.element.parentElement.querySelector('.e-cancel').removeEventListener('click', closePopup);
        },
        open: (args: OpenCloseMenuEventArgs): void => {
            args.element.parentElement.querySelector('.e-cancel').addEventListener('click', closePopup);
        }
    },
    '#dropdownbtn');

function closePopup(): void {
    ddb.toggle();
}


