


import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Resize } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Resize);

let defaultRTE: RichTextEditor = new RichTextEditor({
    enableResize: true
});
defaultRTE.appendTo('#defaultRTE');



