// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save'
    }
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

