ej.base.enableRipple = true;

var colorPicker = new ej.inputs.ColorPicker(
        {
                inline: true,
                change: function (args) {
                          ddb.element.children[0].style.backgroundColor = args.currentValue.hex;
                          closePopup();
                        }
        },
        '#element');

var ddb = new ej.splitbuttons.DropDownButton(
    {
        target: ".e-colorpicker-wrapper",
        iconCss: "e-dropdownbtn-preview",
        beforeClose: function (args) {
                args.element.parentElement.querySelector('.e-cancel').removeEventListener('click', closePopup);
        },
        open: function (args) {
                args.element.parentElement.querySelector('.e-cancel').addEventListener('click', closePopup);
                tooltip();
        }
    },
    "#dropdownbtn");

function closePopup() {
  ddb.toggle();
}

function tooltip() {
   var zindex = (document.getElementsByClassName('e-color-picker-tooltip')[0]).style.zIndex;
   var zindexIntValue = parseInt(zindex) + 2;
   (document.getElementsByClassName('e-color-picker-tooltip')[0]).style.zIndex = zindexIntValue.toString();
}

