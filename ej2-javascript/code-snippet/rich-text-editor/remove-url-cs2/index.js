/**
 * Rich Text Editor - RemoveUrl sample
 */

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    insertAudioSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Audio']
    }
});
defaultRTE.appendTo('#defaultRTE');

