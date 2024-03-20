// Initialize the TextArea control.
var textareaObj = new ej.inputs.TextArea({
    placeholder: 'Enter your comments'
});
// Render initialized TextArea.
textareaObj.appendTo('#default');

document.getElementById('btn').onclick = function () {
    // use focusOut method to remove focus from TextArea
    textareaObj.focusOut();
};