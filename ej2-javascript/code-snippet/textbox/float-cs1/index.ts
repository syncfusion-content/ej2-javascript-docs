

import { TextBox } from '@syncfusion/ej2-inputs';

// Initialize TextBox component with floating type as auto
let floatTypeAuto: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto'
});
// Render initialized floating type as auto TextBox
floatTypeAuto.appendTo('#multiline-auto');

// Initialize TextBox component with floating type as always
let floatTypeAlways: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Always'
});
// Render initialized floating type as always TextBox
floatTypeAlways.appendTo('#multiline-always');

// Initialize TextBox component with floating type as never
let floatTypeNever: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Never'
});
// Render initialized floating type as never TextBox
floatTypeNever.appendTo('#multiline-never');


