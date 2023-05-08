var options = {
    rules: {
        'user': { required: true },
        'age': { number: true, max: 25 }
    }
}
var formObject = new ej.inputs.FormValidator('#form-element', options);

