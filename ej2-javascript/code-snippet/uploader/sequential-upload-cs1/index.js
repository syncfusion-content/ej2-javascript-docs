// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    // enable the sequential upload functionality
    sequentialUpload: true
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

