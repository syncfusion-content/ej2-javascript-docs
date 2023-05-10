

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let colorPicker: ColorPicker = new ColorPicker({
        //To set color value.
        value: '035a',
        mode: 'Picker',
        modeSwitcher: false
}, '#element');


