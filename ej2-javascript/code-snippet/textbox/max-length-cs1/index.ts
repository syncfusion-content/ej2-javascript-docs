import { TextBox } from "@syncfusion/ej2-inputs";

// Initialize the TextBox control.
let textboxObj: TextBox = new TextBox({
    placeholder: 'Enter your comments',
    maxLength: 20
});
// Render initialized TextBox.
textboxObj.appendTo("#default");
