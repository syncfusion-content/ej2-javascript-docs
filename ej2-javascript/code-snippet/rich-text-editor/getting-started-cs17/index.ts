


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor default sample
 */
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Count } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Count);

let defaultRTE: RichTextEditor = new RichTextEditor({ showCharCount: true, maxLength: 2000 });
defaultRTE.appendTo('#defaultRTE');



