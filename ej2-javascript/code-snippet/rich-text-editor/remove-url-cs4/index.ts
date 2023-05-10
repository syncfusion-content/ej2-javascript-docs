


import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Audio } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Audio);

let defaultRTE: RichTextEditor = new RichTextEditor({
    insertAudioSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Audio']
    }
});
defaultRTE.appendTo('#defaultRTE');



