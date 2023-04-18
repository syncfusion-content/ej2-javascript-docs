


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor default sample
 */
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);


let defaultRTE: RichTextEditor = new RichTextEditor({
  height: 340,
  toolbarSettings: {
        items: [ 'FontName', 'FontSize']
    },
    fontSize: {
        width: '40px'
    },
    fontFamily: {
        width: '60px'
    }
});
defaultRTE.appendTo('#defaultRTE');



