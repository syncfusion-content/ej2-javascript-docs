

import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';

let options: FormValidatorModel = {
    rules: {
        'user': { required: true },
        'password': { minLength: [6, 'Need atleast 6 character length'] }
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);


