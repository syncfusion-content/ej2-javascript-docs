

import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';

let customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    return args['value'].length >= 5;
};
let options: FormValidatorModel = {
    rules: {
        'user': { required: true },
        'password': { minLength: [customFn, 'Need atleast 5 letters'] }
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);


