


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

/**
 * Prevention of XSS attack sample
 */
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let rteValue: string = `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;

let defaultRTE: RichTextEditor = new RichTextEditor({
    value: rteValue
 });
defaultRTE.appendTo('#defaultRTE');



