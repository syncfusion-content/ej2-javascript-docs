


import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox({
        // sets the prompting symbol to the MaskedTextBox
        promptChar: "#",
        // sets mask format to the MaskedTextBox
        mask: '999-999-9999'
});

mask.appendTo('#mask');

 

