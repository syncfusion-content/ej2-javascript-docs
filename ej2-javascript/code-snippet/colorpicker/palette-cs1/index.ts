

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let colorPicker: ColorPicker = new ColorPicker(
        {
            //To render Palette.
            mode: 'Palette',
            // To hide modeSwitcher.
            modeSwitcher: false,
            showButtons: false
        },
        '#element');


