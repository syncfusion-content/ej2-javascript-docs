// initialize Uploader component
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    autoUpload: false,
    allowedExtensions: 'image/*',
    selected: onSelect
});
uploadObj.appendTo('#fileupload');

function onSelect(args) {
    if (args.event.type === 'drop') {
        var allImages = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
        var files = args.filesData;
        var modifiedFiles = [];
        for (var i=0; i< files.length; i++){
            var file = files[i];
            if (allImages.indexOf(file.type) === -1) {
                file.status = 'File type is not allowed';
                file.statusCode = '0';
            }
            modifiedFiles.push(file);
        }
        args.isModified = true;
        args.modifiedFilesData = modifiedFiles.concat(uploadObj.filesData);
    }
}

