

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let colorPicker: ColorPicker = new ColorPicker({
        //To render palette at initial load.
        mode: 'Palette'
}, '#element');


