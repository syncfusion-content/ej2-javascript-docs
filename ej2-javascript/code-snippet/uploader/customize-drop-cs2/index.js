 var uploadObject = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        dropArea: document.getElementById('droparea')
    });
    // render initialized Uploader
    uploadObject.appendTo('#fileupload');
    document.getElementById('browse').onclick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };


