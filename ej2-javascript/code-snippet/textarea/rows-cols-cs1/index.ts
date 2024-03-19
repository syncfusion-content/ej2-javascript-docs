import { TextArea } from "@syncfusion/ej2-inputs";
// Initialize the TextArea controls.
let textareaObj1: TextArea = new TextArea({
  placeholder: "Enter your comments",
  rowsCount: 3,
  columnsCount: 35,
  floatLabelType: "Auto",
});

textareaObj1.appendTo("#default1");

let textareaObj2: TextArea = new TextArea({
  placeholder: "Enter your comments",
  rowsCount: 5,
  columnsCount: 40,
  floatLabelType: "Auto",
});

textareaObj2.appendTo("#default2");
