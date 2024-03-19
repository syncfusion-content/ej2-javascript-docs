// Initialize the TextArea control.
var textareaObj = new ej.inputs.TextArea({
    placeholder: 'Enter your comments'
});
// Render initialized TextArea.
textareaObj.appendTo('#default');

document.getElementById('btn').onclick = function () {
    // use getPersistData method in TextArea
    var data = textareaObj.getPersistData();
};