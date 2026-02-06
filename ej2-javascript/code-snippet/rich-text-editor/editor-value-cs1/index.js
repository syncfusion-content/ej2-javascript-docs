// Define the toolbar settings
var toolbarSettings = {
        items: [
          'Bold',
          'Italic',
          'Underline',
          '|',
          'Formats',
          'Alignments',
          'OrderedList',
          'UnorderedList',
          '|',
          'CreateLink',
          'Image',
          '|',
          'SourceCode',
          '|',
          'Undo',
          'Redo',
        ],
};
      
// Initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: toolbarSettings,
});

// Render initialized Rich Text Editor
editor.appendTo('#editor');

// Set initial value
editor.value = '<p>Welcome to Syncfusion RichTextEditor!</p>';

// Function to get editor content
function getEditorContent() {
        const editorValue = editor.value;
        document.getElementById('editorValue').textContent = editorValue;
}

// Add event listener to the button
document
.getElementById('getValueBtn')
.addEventListener('click', getEditorContent);
      