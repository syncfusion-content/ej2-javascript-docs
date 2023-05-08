


import {NumericTextBox} from '@syncfusion/ej2-inputs';

// initializes NumericTextBox component
let numeric: NumericTextBox = new NumericTextBox({
    // sets value to the NumericTextBox
    placeholder: 'NumericTextbox',
    floatLabelType: 'Always' ,
    // prevents nullable value during initialization
    created: function (args) {
        if (this.value==null) {
            this.value=0;
        }
     },
   blur: function (args) {
        // checks for nullable value while focus out
            if (args.value==null)
              numeric1.value=0;
    }
 });

// renders initialized NumericTextBox
numeric.appendTo('#numeric1');

 

