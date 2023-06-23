var customFn = (args) => {
    return args['value'].length >= 5;
};
var options = {
    rules: {
        'user': { required: true },
        'password': { minLength: [customFn, 'Need atleast 5 letters'] }
    }
};
var formObject = new ej.inputs.FormValidator('#form-element', options);

