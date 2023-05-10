


import { NumericTextBox } from '@syncfusion/ej2-inputs';

// initializes the NumericTextBox component
let numeric: NumericTextBox = new NumericTextBox({
    // sets value to the NumericTextBox
    value: 10,
    placeholder: 'Enter value ',
    floatLabelType: 'Always',
    //adding custom css class to NumericTextBox
    cssClass: 'e-style'
});

// renders initialized NumericTextBox
numeric.appendTo('#numeric1');

 

