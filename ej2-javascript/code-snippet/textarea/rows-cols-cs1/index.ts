import { TextArea } from "@syncfusion/ej2-inputs";
// Initialize the TextArea controls.
let textareaObj1: TextArea = new TextArea({
  placeholder: "Enter your comments",
  rows: 3,
  cols: 35,
  floatLabelType: "Auto",
});

textareaObj1.appendTo("#default1");

let textareaObj2: TextArea = new TextArea({
  placeholder: "Enter your comments",
  rows: 5,
  cols: 40,
  floatLabelType: "Auto",
});

textareaObj2.appendTo("#default2");
