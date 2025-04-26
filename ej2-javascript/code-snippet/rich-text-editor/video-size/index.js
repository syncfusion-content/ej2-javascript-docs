// initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['Video']
    },
    insertVideoSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Files/"
    },
    fileUploading: onFileUpload
});

// render initialized Rich Text Editor
editor.appendTo('#editor');

function onFileUpload (args) {
    var sizeInBytes = args.fileData.size;
    var fileSize = 500000;
    if (fileSize < sizeInBytes) {
        args.Cancel = true;
    }
}