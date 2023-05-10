// initialize Rich Text Editor component
var defaultRTE = new ej.richtexteditor.RichTextEditor({
    //Define the quicktoolbar items for image
    quickToolbarSettings: {
        image: [
        'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
        'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'
        ]
    },
    //Define toolbar items
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    }
});
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');

