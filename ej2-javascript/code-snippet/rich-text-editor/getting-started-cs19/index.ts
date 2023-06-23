


import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection, Table } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar, Table );

let defaultRTE: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
        items: ['CreateTable']}
});
defaultRTE.appendTo('#defaultRTE');



