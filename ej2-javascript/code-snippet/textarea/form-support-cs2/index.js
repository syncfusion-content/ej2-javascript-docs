// Initialize the TextArea control.
var textareaObj = new ej.inputs.TextArea({
    placeholder: "Enter your comments",
});
textareaObj.appendTo('#comments');

// Initialize Custom placement
var options = {
    customPlacement: function (inputElement, errorElement) {
        inputElement.parentElement?.appendChild(errorElement);
    },
};
// Initialize Form validation
var formObj = new ej.inputs.FormValidator("#formId", options);