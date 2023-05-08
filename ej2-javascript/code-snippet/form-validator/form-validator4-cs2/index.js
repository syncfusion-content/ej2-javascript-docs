var options = {
    rules: {
        'user': { required: [true, 'User Name: required'] },
        'password': { minLength: [5, 'Password: need atleast 5 characters'] }
    },
    customPlacement: (inputElement, error) => {
        document.getElementById('error').appendChild(error);
    }
};
var formObject = new ej.inputs.FormValidator('#form-element', options);

