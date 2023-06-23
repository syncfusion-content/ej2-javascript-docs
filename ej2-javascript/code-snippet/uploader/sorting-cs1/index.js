// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    selected: onSelect
});

uploadObject.appendTo('#fileupload');

function onSelect(args) {    
    if (initial) { initial = false; return; }
    args.isModified = true;
    var oldFiles = uploadObj.getFilesData();
    var filesData = args.filesData.concat(oldFiles);
    var modifiedData = sortFileList(filesData);
    args.modifiedFilesData = modifiedData;
}

function sortFileList(filesData) {
    var files = filesData;
    var fileNames = [];
    for (var i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }
    var sortedFileNames = fileNames.sort();
    var sortedFilesData = [];
    var index = 0;
    for (var i = 0; i < sortedFileNames.length; i++) {
        var name = sortedFileNames[i];
        for (let i = 0; i < files.length; i++) {
            if (name === files[i].name) {
                sortedFilesData.push(files[i]);
            }
        }
    }
    return sortedFilesData;
}

