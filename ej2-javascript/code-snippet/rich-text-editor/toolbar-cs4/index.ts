import { RichTextEditor, Toolbar, HtmlEditor, ToolbarType,  Image, Table, Link } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Image, Table, Link);

let editor: RichTextEditor = new RichTextEditor({
    height: 340,
    value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
            <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
            <li><p>Capable of handling markdown editing.</p></li>
            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
            <li><p>Provides a fully customizable toolbar.</p></li>
            <li><p>Provides HTML view to edit the source directly for developers.</p></li>
            <li><p>Supports third-party library integration.</p></li>
            <li><p>Allows preview of modified content before saving it.</p></li>
            <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
            </ul>`,
    toolbarSettings: {
        type: ToolbarType.MultiRow,
        items: [
          'Undo','Redo','|','Bold','Italic','Underline','StrikeThrough','InlineCode','SuperScript',
          'SubScript','|','FontName','FontSize','FontColor','BackgroundColor','|','LowerCase','UpperCase',
          '|','Formats','Alignments','Blockquote','|','NumberFormatList','BulletFormatList','|','Outdent',
          'Indent','|','CreateLink','Image','CreateTable','|','ClearFormat','SourceCode',
          ],
    }});
editor.appendTo('#editor');