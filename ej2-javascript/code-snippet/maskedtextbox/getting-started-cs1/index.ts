


import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox({
    // sets custom characters collection for non-mask elements 'P' and 'M'
    customCharacters: {
        P: 'P,A,a,p',
        M: 'M,m'
    },
    // sets mask format to the MaskedTextBox
    mask: '00:00 >PM',
    placeholder: 'Time (ex: 10:00 PM, 10:00 AM)',
    floatLabelType: 'Always'
});

mask.appendTo('#mask');

 

