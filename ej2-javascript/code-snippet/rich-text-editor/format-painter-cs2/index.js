/**
 * Rich Text Editor - Format Painter sample
 */

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['FormatPainter', 'ClearFormat', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
        'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
    },
    formatPainterSettings: {
        allowedFormats: 'p;h1;h2;h3;div;ul;ol;li;span;strong;em;code;',
        deniedFormats: 'h3(e-rte-block-blue-text){background-color,padding,color}[title]; li{color}; span(e-inline-text-highlight){color}[title]; strong{color}(e-rte-strong-bg);',
    }
});
defaultRTE.appendTo('#formatPainterRTE');

