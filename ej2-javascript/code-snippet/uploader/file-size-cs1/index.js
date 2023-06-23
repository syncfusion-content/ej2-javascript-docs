// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
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

