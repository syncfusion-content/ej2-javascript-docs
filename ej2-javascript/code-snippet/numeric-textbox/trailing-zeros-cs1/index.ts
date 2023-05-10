


import {NumericTextBox} from '@syncfusion/ej2-inputs';
//maintains trailing zeros while focusing
let numericFocus: function () {
    var numericObj = this.ej2_instances ? this.ej2_instances[0] : this;
    numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
}
// Render the Numeric Textbox
let numeric: NumericTextBox = new NumericTextBox({
    value: 10,
    decimals:2,
    format: 'n2',
    placeholder: 'NumericTextbox',
    floatLabelType: 'Always' ,
    change: numericFocus
});
numeric.appendTo('#numeric');
document.getElementById('numeric').addEventListener('focus', numericFocus);

 

