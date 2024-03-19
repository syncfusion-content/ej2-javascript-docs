var removeFile = [];
// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    removing: onremove
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


function onremove(args) {
  args.cancel = true;
  removeFile.push(args.filesData);
  dialog.show();
}

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
    content: 'Confirm to remove the file?',
    buttons: [{'click': () => { onClick() }, buttonModel: { content: 'OK', cssClass: 'e-flat'}},
        {'click': () => {dialog.hide(); }, buttonModel: { content: 'Cancel', cssClass: 'e-flat'} }],
    width: '250px',
    visible: false,
    target: '#container'
});
dialog.appendTo('#dialog');

function onClick() {
  dialog.hide();
  uploadObject.remove(removeFile[0], false, true);
  removeFile=[];
}

