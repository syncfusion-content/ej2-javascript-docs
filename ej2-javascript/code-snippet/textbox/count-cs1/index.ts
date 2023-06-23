

import { TextBox } from '@syncfusion/ej2-inputs';

// Initialize TextBox component
let countChar: TextBox = new TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto',
    input: (args: any)=> {
        let word, addresscountRem, addressCount;
        word = args.value;
        addressCount = word.length;
        addresscountRem = document.getElementById('numbercount');
        addresscountRem.textContent = addressCount+"/25";
    }
});

// Render initialized TextBox
countChar.appendTo('#default');



