

import { ColorPicker } from '@syncfusion/ej2-inputs';
import { addClass, enableRipple } from '@syncfusion/ej2-base';

let colorPicker: ColorPicker = new ColorPicker({}, '#element');

let target: Element = colorPicker.element.nextElementSibling;
target.insertBefore(colorPicker.element, target.children[1]);


