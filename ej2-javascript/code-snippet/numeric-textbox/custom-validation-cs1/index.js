// initializes the NumericTextBox component
var numeric = new ej.inputs.NumericTextBox({
    // sets value to the NumericTextBox
    value: 15,
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

//initialize button
var button = new ej.buttons.Button();
button.appendTo('#submit_btn')


// checks the value of NumericTextbox and returns the corresponding boolean value
var customFn = function(args) {
    if (numeric.value>=10 && numeric.value<=100) {
    return true;
    }
    else {
        return false;
    }
};
// sets required property in the FormValidator rules collection
var options = {
    rules: {
      'numericRange': {required: [true, "Number is required"]},
    }
}
// defines FormValidator to validate the NumericTextBox
var formObject =  new ej.inputs.FormValidator('#form-element', options);
//rules for validating the NumericTextbox
formObject.addRules('numericRange', { range: [customFn, "Please enter a number between 10 to 100"] });

// places error label outside the NumericTextBox using the customPlacement event of FormValidator
var customPlace= function(element, error) {
    element.parentNode.parentNode.appendChild(error);
};
formObject.customPlacement = customPlace;   
var submitBtn = document.getElementById('submit_btn');
submitBtn.onclick = function () {
    // validates the NumericTextBox
    formObject.validate("numericRange");
    var ele = document.getElementById('numeric1');
    // checks for incomplete value and alerts the formt submit
    if (ele.value !== "" && ele.value >=10 && ele.value<=100) {
        alert("Submitted");
    }
};


