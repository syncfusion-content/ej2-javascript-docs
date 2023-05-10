


import { RichTextEditor, Toolbar, Link, Image, MarkdownFormatter, MarkdownEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({
    height: 340,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|','Undo', 'Redo']
    },
    editorMode: 'Markdown',
    formatter: new MarkdownFormatter({
        listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
        formatTags: {
            'Blockquote': '> '
        },
        selectionTags: {'Bold': '__',  'Italic': '_'}
    })
});
defaultRTE.appendTo('#defaultRTE');



