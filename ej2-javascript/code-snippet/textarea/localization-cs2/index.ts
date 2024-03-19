import { TextArea } from "@syncfusion/ej2-inputs";
import { L10n } from '@syncfusion/ej2-base';

let textareaObj: TextArea = new TextArea({
    locale: 'de-DE',
    floatLabelType: 'Auto'
});

// Load culture for textarea
L10n.load({
    'de-DE': {
       'textarea': {'placeholder': "Geben Sie Ihre Kommentare ein"}
     }
});

textareaObj.appendTo("#default");
