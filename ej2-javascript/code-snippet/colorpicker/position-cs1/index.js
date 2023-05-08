ej.base.enableRipple = true;

var colorPalette = new ej.inputs.ColorPicker(
    {
        mode: 'Palette',
        inline: true,
        showButtons: false,
        modeSwitcher: false,
        change: paletteOnChange
    }
    , '#palette');

var splitBtn = new ej.splitbuttons.SplitButton(
    {
        target: '#target',
        iconCss: 'e-icons e-font-icon',
        open: function (args) {
            args.element.children[1].addEventListener('click', openDialog);
        },
        beforeClose: function (args) {
            args.element.children[1].removeEventListener('click', openDialog);
        }
    }
    , '#split-btn');

var modalDialog = new ej.popups.Dialog(
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

var colorPicker = new ej.inputs.ColorPicker(
    {
        inline: true,
        modeSwitcher: false,
        change: pickerOnChange
    }
    , '#picker');

function openDialog() {
    modalDialog.show();
}

function dialogOpen() {
    colorPicker.refresh();
    colorPicker.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', dlgClose);
}

function dlgClose() {
    modalDialog.hide();
}

function paletteOnChange(args) {
    splitBtn.element.querySelector('.e-font-icon').style.borderBottomColor = args.currentValue.rgba;
}

function pickerOnChange(args) {
    paletteOnChange(args);
    dlgClose();
}

