var L10n = ej.base.L10n;

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
    }

});
var options = {
    rules: {
        email: { email: true },
    },
    locale:"ar-AR"
}
var formObject = new ej.inputs.FormValidator('#form-element', options);

