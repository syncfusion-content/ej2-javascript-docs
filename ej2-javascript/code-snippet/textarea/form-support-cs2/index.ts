import { TextArea, FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";

let textareaObj: TextArea = new TextArea({
  placeholder: "Enter your comments",
});
textareaObj.appendTo("#comments");

// Initialize Custom placement
let options: FormValidatorModel = {
  customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
    inputElement.parentElement?.appendChild(errorElement);
  },
};

// Initialize Form validation
let formObj: FormValidator;
formObj = new FormValidator("#formId", options);
