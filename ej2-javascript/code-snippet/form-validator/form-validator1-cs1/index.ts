

import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';
let options: FormValidatorModel = {
    rules: {
        'user': { required: true },
        'age': { number: true, max: 25 }
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);


