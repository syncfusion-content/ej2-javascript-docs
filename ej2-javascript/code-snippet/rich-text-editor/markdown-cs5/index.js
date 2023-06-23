// initialize Rich Text Editor component
var defaultRTE = new ej.richtexteditor.RichTextEditor({
    height: 340,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|', 'Undo', 'Redo']
    },
    editorMode: 'Markdown',
    formatter: new ej.richtexteditor.MarkdownFormatter({
        listTags: { 'OL': '2. ', 'UL': '+ ' },
        formatTags: {
            'Blockquote': '> '
        },
        selectionTags: { 'Bold': '__', 'Italic': '_' }
    })
});
defaultRTE.appendTo('#defaultRTE');

