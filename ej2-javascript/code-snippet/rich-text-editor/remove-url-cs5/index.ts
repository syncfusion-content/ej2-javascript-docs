

import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Video);

let defaultRTE: RichTextEditor = new RichTextEditor({
    insertVideoSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Video']
    }
});
defaultRTE.appendTo('#defaultRTE');



