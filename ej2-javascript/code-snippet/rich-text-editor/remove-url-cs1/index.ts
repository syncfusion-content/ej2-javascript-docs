

import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Image, FileManager } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Image, FileManager);

let defaultRTE: RichTextEditor = new RichTextEditor({
    insertImageSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Image']
    }
});
defaultRTE.appendTo('#defaultRTE');



