var uploadObject = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
            // split the files into chunks of the size 102400 bytes
            chunkSize: 102400
        }
    });
    // render initialized Uploader
    uploadObject.appendTo('#fileupload');
    

