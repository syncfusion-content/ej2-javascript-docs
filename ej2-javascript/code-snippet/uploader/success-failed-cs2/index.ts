

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    success: onUploadSuccess,
    failure: onUploadFailure
});
// render initialized Uploader
uploadObject.appendTo('#fileupload');

function onUploadSuccess(args: any): void  {
  if (args.operation === 'upload') {
    console.log('File uploaded successfully');
  }
}
function onUploadFailure(args: any): void  {
  console.log('File failed to upload');
}


