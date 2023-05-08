var options = {
    rules: {
        'product_name': { required: true },
        'rating': { range: [1, 5] }
    }
};
var formObject = new ej.inputs.FormValidator('#form-element', options);
// validate all input elements in the form
formObject.validate();

