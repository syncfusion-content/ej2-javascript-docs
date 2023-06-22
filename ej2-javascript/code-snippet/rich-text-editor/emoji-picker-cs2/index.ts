import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker);

let emojiPickerRTE: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
        'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'EmojiPicker',
        '|', 'Undo', 'Redo'] 
    },
});

emojiPickerRTE.appendTo('#emojipickerRTE');

emojiPickerRTE.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.keyCode === 191) {
        emojiPickerRTE.showEmojiPicker('center','auto');
    };
  });