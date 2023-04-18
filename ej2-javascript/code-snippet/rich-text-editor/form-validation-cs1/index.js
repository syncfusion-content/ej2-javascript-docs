var defaultRTE = new ej.richtexteditor.RichTextEditor({ 
    showCharCount: true,
    maxLength: 100,
    placeholder: 'Type something',
    change : function() {
  button.disabled = false;
}
});
defaultRTE.appendTo('#defaultRTE');

 var button = new ej.buttons.Button({
   disabled : true
 });
button.appendTo('#validateSubmit')

new ej.inputs.FormValidator('#form-element');

