// initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
                items: ['Video']
        },
        insertVideoSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
        }
});

// render initialized Rich Text Editor
editor.appendTo('#editor');