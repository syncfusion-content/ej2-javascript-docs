

import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { addClass, enableRipple } from '@syncfusion/ej2-base';

let colorPicker: ColorPicker = new ColorPicker(
        {
            change: (args: ColorPickerEventArgs): void => {
                (colorPicker.element.nextElementSibling.querySelector('.e-selected-color') as HTMLElement).style.borderBottomColor = args.currentValue.rgba;
            }
        },
        '#element');

addClass([colorPicker.element.nextElementSibling.querySelector('.e-selected-color')], 'e-icons');


