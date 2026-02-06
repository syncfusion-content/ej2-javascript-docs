// initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
                items: ['Audio']
        },
        insertAudioSettings: {
                saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
                path: "../Files/",
                maxFileSize: 30000000
        }
});

// render initialized Rich Text Editor
editor.appendTo('#editor');