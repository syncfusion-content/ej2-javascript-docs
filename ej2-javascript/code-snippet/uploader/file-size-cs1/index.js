// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    selected: onSelect
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

function onSelect(args) {
    var totalSize = 0;
    for (var i=0; i <args.filesData.length; i++) {
        var file = args.filesData[i];
        totalSize = totalSize + file.size;
    }
    var size = uploadObj.bytesToSize(totalSize);
    alert("Total select file's size is " + size);
}

