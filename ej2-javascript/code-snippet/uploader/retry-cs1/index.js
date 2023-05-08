var uploadObject = new ej.inputs.Uploader({
        asyncSettings: {
            // provided the wrong url to showcase the chunk upload failure related properties.
            saveUrl: 'https://aspnetmvc.syncfusion.com/service/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/service/api/uploadbox/Remove',
            // set chunk size for enable the chunk upload
            chunkSize: 102400,
            // set count for automatic retry when chunk upload failed
            retryCount: 5,
            // set time delay for automatic retry when chunk upload failed
            retryAfterDelay: 3000
        }
    });
    // render initialized Uploader
    uploadObject.appendTo('#fileupload');
    

