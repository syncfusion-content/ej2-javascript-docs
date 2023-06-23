

import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';

let options: FormValidatorModel = {
    rules: {
        'product_name': { required: true },
        'rating': { range: [1,5] }
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);
// validate all input elements in the form
formObject.validate();


