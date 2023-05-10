// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    // enable the sequential upload functionality
    sequentialUpload: true
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

