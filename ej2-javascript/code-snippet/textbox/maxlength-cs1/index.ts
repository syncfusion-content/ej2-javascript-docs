

import { TextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

// Initialize TextBox component
let maxLength: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto'
});

// Render initialized TextBox
maxLength.appendTo('#default');

// Initialize TextBox component
let addAttr: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto'
});

// Render initialized TextBox
addAttr.appendTo('#attr');

// Initialize Button component
let button: Button = new Button({
});
// Render initialized Button
button.appendTo('#button');

document.getElementById('button').onclick = (): void => {
    addAttr.addAttributes({maxlength: 15});
}



