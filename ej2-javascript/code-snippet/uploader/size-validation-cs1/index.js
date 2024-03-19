// Initialize the uploader component
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    minFileSize: 10000,
    maxFileSize: 1500000
});
uploadObj.appendTo('#fileupload');

