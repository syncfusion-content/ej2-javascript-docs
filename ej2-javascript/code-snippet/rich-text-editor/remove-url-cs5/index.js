/**
 * Rich Text Editor - RemoveUrl sample
 */

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    insertVideoSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Video']
    }
});
defaultRTE.appendTo('#defaultRTE');

