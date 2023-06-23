

import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { Dialog } from '@syncfusion/ej2-popups';
import { addClass, enableRipple, EmitType } from '@syncfusion/ej2-base';
import { SplitButton, OpenCloseMenuEventArgs, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-splitbuttons';

let colorPalette: ColorPicker = new ColorPicker(
    {
        mode: 'Palette',
        inline: true,
        showButtons: false,
        modeSwitcher: false,
        change: paletteOnChange
    }
    , '#palette');

let splitBtn: SplitButton = new SplitButton(
    {
        target: '#target',
        iconCss: 'e-icons e-font-icon',
        open: (args: OpenCloseMenuEventArgs) => {
            args.element.children[1].addEventListener('click', openDialog);
        },
        beforeClose: (args: BeforeOpenCloseMenuEventArgs): void => {
            args.element.children[1].removeEventListener('click', openDialog);
        }
    }
    , '#split-btn');

let modalDialog: Dialog = new Dialog(
    {
        target: '.wrap',
        width: '270px',
        height: '336px',
        isModal: true,
        visible: false,
        cssClass: 'e-dlg-picker',
        content: '<input type="color" id="picker" />',
        animationSettings: { effect: 'Zoom' },
        open: dialogOpen,
        overlayClick: dlgClose
    }
    , '#modal-dialog');

let colorPicker: ColorPicker = new ColorPicker(
    {
        inline: true,
        modeSwitcher: false,
        change: pickerOnChange
    }
    , '#picker');

function openDialog(): void {
    modalDialog.show();
}

function dialogOpen(): void {
    colorPicker.refresh();
    colorPicker.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', dlgClose);
}

function dlgClose(): void {
    modalDialog.hide();
}

function paletteOnChange(args: ColorPickerEventArgs): void {
    (splitBtn.element.querySelector('.e-font-icon') as HTMLElement).style.borderBottomColor = args.currentValue.rgba;
}

function pickerOnChange(args: ColorPickerEventArgs): void {
    paletteOnChange(args);
    dlgClose();
}


