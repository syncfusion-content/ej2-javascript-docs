// initializes the MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox({
    // sets mask format to the MaskedTextBox
    mask: '000-000-0000',
    placeholder: 'Mobile Number',
    floatLabelType: 'Always'
});

mask.appendTo('#mask1');

//initialize button
var button = new ej.buttons.Button();
button.appendTo('#submit_btn')

// checks the length of mask value and returns corresponding boolean value 
var customFn = function(args) {
    var argsLength = args.element.ej2_instances[0].value.length;
    if(argsLength != 0){
        return argsLength >= 10;
    } else {
        return true;
    }
}

//value is returned based on the length of mask 
var custom = function(args) {
    var argsLength = args.element.ej2_instances[0].value.length;
    if(argsLength == 0){
    return 0; 
    } else {
        return argsLength;
    }
};

// sets required property in the FormValidator rules collection
var options = {
    rules: {
        'mask_value': { numberValue: [customFn, 'Enter valid mobile number'] },
    },
}

// defines FormValidator to validate the MaskedTextBox
var formObject =  new ej.inputs.FormValidator('#form-element', options);

//FormValidator rule is added for empty MaskedTextBox
formObject.addRules('mask_value', { maxLength: [custom, 'Enter mobile number'] });

// places error label outside the MaskedTextBox using the customPlacement event of FormValidator

formObject.customPlacement =  function(element, error) {
    document.querySelector(".form-group").appendChild(error);
};

document.getElementById('submit_btn').onclick = function () {
    // validates the MaskedTextBox
    formObject.validate("mask_value");
    var ele = document.getElementById('mask1');
    // checks for incomplete value and alerts the formt submit
    if (ele.value !== "" && ele.value.indexOf(mask.promptChar) === -1) {
        alert("Submitted");
    }
};


