


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Count } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Count);

let defaultRTE: RichTextEditor = new RichTextEditor({ placeholder:'Type Something' });
defaultRTE.appendTo('#defaultRTE');



