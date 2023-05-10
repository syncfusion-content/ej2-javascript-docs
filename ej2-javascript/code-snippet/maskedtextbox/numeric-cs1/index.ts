


import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox({
    // sets mask format to the MaskedTextBox
    mask: '999-99999',
    value: "342-45432",
});

mask.appendTo('#mask1');

 

