ej.base.enableRipple(true);
var dropElement = document.getElementsByClassName('control-fluid')[0];
// Initialize the control with file validation
var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    minFileSize: 10000,
    allowedExtensions: '.doc, .docx, .xls, .xlsx',
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    selected: onFileSelected,
    success: onUploadSuccess,
    dropArea: dropElement
});
uploadObj.appendTo('#validation');
function onFileSelected(args) {
    // Filter the 5 files only to showcase
    args.filesData.splice(5);
    var filesData = uploadObj.getFilesData();
    var allFiles = filesData.concat(args.filesData);
    if (allFiles.length > 5) {
        for (var i = 0; i < allFiles.length; i++) {
            if (allFiles.length > 5) {
                allFiles.shift();
            }
        }
        args.filesData = allFiles;
        // set the modified custom data
        args.modifiedFilesData = args.filesData;
    }
    args.isModified = true;
}
function onUploadSuccess(args) {
    var _this = this;
    var li = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    if (args.operation === 'upload') {
        li.querySelector('.e-file-delete-btn').onclick = function () {
            generateSpinner(_this.uploadWrapper);
        };
        li.querySelector('.e-file-delete-btn').onkeydown = function (e) {
            if (e.keyCode === 13) {
                generateSpinner(e.target.closest('.e-upload'));
            }
        };
    }
    else {
        ej.popups.hideSpinner(this.uploadWrapper);
        ej.base.detach(this.uploadWrapper.querySelector('.e-spinner-pane'));
    }
}
function generateSpinner(targetElement) {
    ej.popups.createSpinner({ target: targetElement, width: '25px' });
    ej.popups.showSpinner(targetElement);
}



