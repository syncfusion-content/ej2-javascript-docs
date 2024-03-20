import { TextArea } from "@syncfusion/ej2-inputs";

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea({
    placeholder: 'Enter your comments',
    maxLength: 20
});
// Render initialized TextArea.
textareaObj.appendTo("#default");
