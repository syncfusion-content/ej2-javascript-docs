

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let colorPicker: ColorPicker = new ColorPicker(
        {
            // To hide the input area
            cssClass: 'e-hide-value',
            modeSwitcher: false
        },
        '#element');


