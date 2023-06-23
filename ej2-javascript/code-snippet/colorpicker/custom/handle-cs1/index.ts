

import { ColorPicker, OpenEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let colorPicker: ColorPicker = new ColorPicker(
        {
            value: '#344aae',
            // To hide the input area
            cssClass: 'e-custom-picker',
            modeSwitcher: false,
            open: (args: OpenEventArgs): void => {
                args.element.querySelector('.e-handler').classList.add('e-icons');
            }
        },
        '#element');


