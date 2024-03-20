import { TextArea } from "@syncfusion/ej2-inputs";

let textareaObj: TextArea = new TextArea({
    placeholder: 'veuillez inscrire vos commentaires',
    locale: 'fr-BE',
    floatLabelType: 'Auto'
});
textareaObj.appendTo("#default");
