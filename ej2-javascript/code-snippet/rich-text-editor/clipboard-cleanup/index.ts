import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, ClipBoardCleanup } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar, ClipBoardCleanup );

let editor: RichTextEditor = new RichTextEditor({});
editor.appendTo('#editor');
