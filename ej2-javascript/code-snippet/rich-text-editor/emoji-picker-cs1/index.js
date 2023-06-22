/**
 * Rich Text Editor - Emoji picker sample
 */

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
        'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'EmojiPicker',
        '|', 'Undo', 'Redo'] 
    },
});
defaultRTE.appendTo('#emojiPickerRTE');