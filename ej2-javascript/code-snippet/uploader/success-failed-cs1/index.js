// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    success: onUploadSuccess,
    failure: onUploadFailure
});
// render initialized Uploader
uploadObject.appendTo('#fileupload');

function onUploadSuccess(args) {
  if (args.operation === 'upload') {
    console.log('File uploaded successfully');
  }
}
function onUploadFailure(args) {
  console.log('File failed to upload');
}

