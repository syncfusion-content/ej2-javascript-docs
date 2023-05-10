

import { TextBox } from '@syncfusion/ej2-inputs';
// Initialize TextBox component with cssClass 'e-filled'
let filledTextBox: TextBox = new TextBox({
    placeholder: 'Filled',
    cssClass: 'e-filled',
    floatLabelType: 'Auto'
});
filledTextBox.appendTo('#filled');
// Initialize TextBox component with cssClass 'e-outline'
let outlineTextBox: TextBox = new TextBox({
    placeholder: 'Outlined',
    cssClass: 'e-outline',
    floatLabelType: 'Auto'
});
outlineTextBox.appendTo('#outlined');


