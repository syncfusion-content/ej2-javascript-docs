// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

