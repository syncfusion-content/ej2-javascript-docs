


import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

// initializes the NumericTextBox component
let numeric: NumericTextBox = new NumericTextBox({
    min: 10,
    max: 100,
    strictMode : false,
    placeholder: 'NumericTextbox',
    floatLabelType: 'Always',
    change: function(args){
        if (numeric.value != null)
            formObject.validate("numericRange");
        }
});

numeric.appendTo('#numeric1');

let button: Button = new Button();
button.appendTo('#submit_btn');

// checks the value of NumericTextbox and returns the corresponding boolean value
let customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    if(numeric.value>=10 && numeric.value<=100) {
        return true;
    }
    else {
        return false;
    }
};

// sets required property in the FormValidator rules collection
let options: FormValidatorModel = {
    rules: {
            'numericRange': { required: [true, "Number is required"] },
            }
}
// defines FormValidator to validate the NumericTextBox
let formObject: FormValidator = new FormValidator('#form-element', options);

//rules for validating the NumericTextbox
 formObject.addRules('numericRange', { range: [customFn, "Please enter a number between 10 to 100"] });

// places error label outside the NumericTextBox using the customPlacement event of FormValidator
let customPlace: (element: HTMLElement, error: HTMLElement) => void = (element: HTMLElement, error: HTMLElement) => {
    element.parentNode.parentNode.appendChild(error);
};

formObject.customPlacement = customPlace;

let submitBtn: HTMLInputElement = <HTMLInputElement>document.getElementById('submit_btn');

submitBtn.onclick = () => {
    // validates the NumericTextBox
    formObject.validate("numericRange");
    let ele: HTMLInputElement = <HTMLInputElement>document.getElementById('numeric1');
    // checks for incomplete value and alerts the formt submit
    if (ele.value !== "" && ele.value >=10 && ele.value<=100) {
       alert("Submitted");
     }
};

 

