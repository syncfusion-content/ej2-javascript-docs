


import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({});
defaultRTE.appendTo('#defaultRTE');

defaultRTE.contentModule.getDocument().addEventListener("keydown",function(e: any):void{
  if(e.key === 's' && e.ctrlKey===true){
        e.preventDefault(); // to prevent default ctrl+s action
        defaultRTE.updateValue(); // to update the value after editing
        let value: any= defaultRTE.value; // you can get the RTE content to save in the desired database
  }
});




