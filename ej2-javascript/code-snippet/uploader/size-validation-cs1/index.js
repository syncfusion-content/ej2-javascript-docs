// Initialize the uploader component
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    minFileSize: 10000,
    maxFileSize: 1500000
});
uploadObj.appendTo('#fileupload');

