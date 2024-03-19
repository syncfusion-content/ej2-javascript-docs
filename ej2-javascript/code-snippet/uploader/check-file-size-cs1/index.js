 ej.base.enableRipple(true);

//Initialize the control by preload files
var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    uploading: onBeforeUpload
});
uploadObj.appendTo('#fileupload');

function onBeforeUpload(args) {
    // get the file size in bytes
    var sizeInBytes = args.fileData.size;
    // get the file size in standard format
    alert("File size is: " + uploadObj.bytesToSize(sizeInBytes));
}

