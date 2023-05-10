ej.base.enableRipple = true;

var preview = document.getElementById('preview');

var colorPicker = new ej.inputs.ColorPicker(
    {
        mode: "Palette",
        value: "#f44336",
        showButtons: false,
        modeSwitcher: false,
        inline: true,
        columns: 4,
        presetColors: { 'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4',                            '#00bcd4', '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107'] },
        beforeTileRender: function(args) {
            args.element.classList.add('e-custom-tile');
        },
        change: function (args) {
                    document.querySelector(".e-split-btn .e-picker-icon").style.borderBottomColor = args.currentValue.hex;
                    preview.style.backgroundColor = args.currentValue.hex;
                    preview.textContent = args.currentValue.hex;
                    if (splitBtn.element.getAttribute("aria-expanded")) {
                        splitBtn.toggle();
                        splitBtn.element.focus();
                    }
                }
    },
    '#element');

var splitBtn = new ej.splitbuttons.SplitButton({ iconCss: "e-cp-icons e-picker-icon", target: "#target" }, '#splitbtn')

preview.style.backgroundColor = "#f44336";
preview.textContent = "#f44336";

document.getElementById('no-color').onclick = function() {
        //sets color picker value property to null
        colorPicker.setProperties({ 'value': "" }, true);
        document.querySelector('.e-split-btn .e-picker-icon').style.borderBottomColor = "transparent";
        preview.textContent = "No color"
        preview.style.backgroundColor = "transparent";
}

