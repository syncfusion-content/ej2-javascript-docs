/**
 * Rich Text Editor Undo Redo sample 
 */
var defaultRTE = new ej.richtexteditor.RichTextEditor({ 
    height: 340,
    toolbarSettings: {
        items: ['Undo', 'Redo']},
    undoRedoSteps: 50,
    undoRedoTimer: 400
});
defaultRTE.appendTo('#defaultRTE');

