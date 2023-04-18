


import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar );

let defaultRTE: RichTextEditor = new RichTextEditor({
       insertImageSettings :{
    saveUrl : 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
  }
});
defaultRTE.appendTo('#defaultRTE');



