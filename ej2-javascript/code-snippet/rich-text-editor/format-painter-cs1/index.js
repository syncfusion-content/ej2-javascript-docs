/**
 * Rich Text Editor - Format Painter sample
 */

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['FormatPainter', 'ClearFormat', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
        'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
    },
});
defaultRTE.appendTo('#formatPainterRTE');

