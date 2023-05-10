ej.base.enableRipple = true;

var preview = document.getElementById('preview');

var colorPicker = new ej.inputs.ColorPicker(
    {
        mode: "Palette",
        value: "#ba68c8",
        showButtons: false,
        modeSwitcher: false,
        //To enable no color support
        noColor: true,
        change: function(args) {
                    preview.style.backgroundColor = args.currentValue.hex;
                    preview.textContent = args.currentValue.hex ? args.currentValue.hex : 'No color';
                }
    },
    '#element');

preview.style.backgroundColor = "#ba68c8";
preview.textContent = "#ba68c8";

