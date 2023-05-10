


import {NumericTextBox} from '@syncfusion/ej2-inputs';

let hideButtons: NumericTextBox = new NumericTextBox({
        // sets the step value as '2' to increase/decrease the value by '2'
        step: 2,
        // sets the showSpinButton value as `false` to hide the spin buttons
        showSpinButton: false
        min: 10,
        max: 100,
        value: 16
    });

hideButtons.appendTo('#numeric');



