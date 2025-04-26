// initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
                items: ['Audio']
        },
        insertAudioSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
        },
        fileUploading: onFileUpload
});

// render initialized Rich Text Editor
editor.appendTo('#editor');

function onFileUpload (args) {
        var accessToken = "Authorization_token";
        // adding custom Form Data
        args.customFormData = [{ 'Authorization': accessToken }];
}