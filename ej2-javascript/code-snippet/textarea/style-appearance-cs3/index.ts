import { TextArea } from '@syncfusion/ej2-inputs';
// Initialize TextArea component with custom cssClass
let textareaObj: TextArea = new TextArea({
    placeholder: 'Enter your comments',
    cssClass: 'custom-textarea',
    floatLabelType: 'Auto'
});
textareaObj.appendTo('#default');



