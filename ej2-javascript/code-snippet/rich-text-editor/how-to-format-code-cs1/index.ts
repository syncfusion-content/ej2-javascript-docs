


import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({
  toolbarSettings: {
    items: ['InsertCode']
  }
});
defaultRTE.appendTo('#defaultRTE');



