 ej.base.enableRipple(true);

//Initialize the control by preload files
var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    }
});
uploadObj.appendTo('#fileupload');

document.getElementById('first').onclick = function (args) {
    uploadObj.upload(uploadObj.getFilesData()[0]);
};

document.getElementById('full').onclick = function (args) {
    uploadObj.upload(uploadObj.getFilesData());
};

