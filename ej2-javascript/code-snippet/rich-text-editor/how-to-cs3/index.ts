


import { RichTextEditor, Toolbar, Link, Image, Count, IHtmlFormatterModel, HTMLFormatter, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);

let customHTMLModel: IHtmlFormatterModel = { // formatter is used to configure the custom key
    keyConfig: {
        'insert-link': 'ctrl+q', // configure the desired key
    }
};

let defaultRTE: RichTextEditor = new RichTextEditor({
    formatter: new HTMLFormatter(customHTMLModel), // to configure custom key
});
defaultRTE.appendTo('#defaultRTE');



