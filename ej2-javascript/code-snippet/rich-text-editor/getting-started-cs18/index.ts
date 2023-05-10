


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor default sample
 */
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);


let defaultRTE: RichTextEditor = new RichTextEditor({
    height: 340,
    toolbarSettings: {
        items: ['Undo', 'Redo']},
    undoRedoSteps: 50,
    undoRedoTimer: 400
});

defaultRTE.appendTo('#defaultRTE');



