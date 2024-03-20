import { TextArea } from '@syncfusion/ej2-inputs';

let textareaObj1: TextArea = new TextArea({
    placeholder: 'Success',
    cssClass: 'e-success',
    floatLabelType: 'Auto'
});
textareaObj1.appendTo('#default1');

let textareaObj2: TextArea = new TextArea({
    placeholder: 'Warning',
    cssClass: 'e-warning',
    floatLabelType: 'Auto'
});
textareaObj2.appendTo('#default2');