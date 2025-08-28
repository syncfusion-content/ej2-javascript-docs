import { RichTextEditor, Toolbar, Image, Link, HtmlEditor, QuickToolbar, NodeSelection, Table, CodeBlock } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, CodeBlock);

let editor: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
                items: ['Checklist']
        }
});
editor.appendTo('#editor');
