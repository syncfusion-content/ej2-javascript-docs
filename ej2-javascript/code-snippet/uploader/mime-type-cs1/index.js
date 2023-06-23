 ej.base.enableRipple(true);

//Initialize the control by preload files
var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    uploading: onBeforeUpload
});
uploadObj.appendTo('#fileupload');

function onBeforeUpload(args) {
    // get the file MIME type
    alert("File MIME type is: " + args.fileData.rawFile.type)
}

