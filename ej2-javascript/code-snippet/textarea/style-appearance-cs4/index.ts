import { TextArea } from '@syncfusion/ej2-inputs';
// Initialize TextArea component with custom cssClass
let textareaObj: TextArea = new TextArea({
    placeholder: 'Enter your comments',
    cssClass: 'e-static-clear',
    showClearButton: true
});
textareaObj.appendTo('#default');



