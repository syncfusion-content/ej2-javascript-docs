

import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

let preview: HTMLElement = document.getElementById('preview');

let colorPicker: ColorPicker = new ColorPicker(
    {
        mode: "Palette",
        value: "#ba68c8",
        showButtons: false,
        modeSwitcher: false,
        //To enable no color support
        noColor: true,
        change: (args: ColorPickerEventArgs): void => {
                    preview.style.backgroundColor = args.currentValue.hex;
                    preview.textContent = args.currentValue.hex ? args.currentValue.hex : 'No color';
                }
    },
    '#element');

preview.style.backgroundColor = "#ba68c8";
preview.textContent = "#ba68c8";


