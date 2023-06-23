


import { FormValidator,FormValidatorModel} from '@syncfusion/ej2-inputs';
import { L10n } from '@syncfusion/ej2-base';

// Load `German` culture to override spin buttons tooltip text
L10n.load({
    'ar-AR': {
        'formValidator':{
            "required" : "هذه الخانة مطلوبه",
            "email": "أدخل بريد إلكتروني صالح",
            "url": "أدخل رابط صحيح من فضلك",
            "date": "ارجوك ادخل تاريخ صحيح.",
            "dateIso": "الرجاء إدخال تاريخ صالح (ISO)",
            "creditcard": "يرجى إدخال رقم بطاقة صالح",
            "number" : "من فضلك أدخل رقما صالحا",
            "digits" : "الرجاء إدخال الأرقام فقط",
            "maxLength" : "الرجاء إدخال ما لا يزيد عن {0} حرف",
            "minLength": "الرجاء إدخال أحرف {0} على الأقل",
            "rangeLength" : "يرجى إدخال قيمة بين {0} و {1} من الأحرف",
            "range" : "يرجى إدخال قيمة بين {0} و {1}",
            "max" : "الرجاء إدخال قيمة أقل من أو تساوي {0}",
            "min" : "الرجاء إدخال قيمة أكبر من أو تساوي {0}",
            "regex": "يرجى إدخال قيمة صحيحة",
            "tel" : "يرجى إدخال رقم هاتف صالح",
            "pattern" : "الرجاء إدخال قيمة نمط صحيح",
            "equalTo" : "يرجى إدخال نص مطابقة صحيح"
        }
    },

});

let options: FormValidatorModel = {
    rules: {
        email: { email: true },
    },
    locale:"ar-AR"
}
let formObject: FormValidator = new FormValidator('#form-element', options);



