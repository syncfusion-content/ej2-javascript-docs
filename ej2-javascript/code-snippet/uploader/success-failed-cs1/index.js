// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
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

