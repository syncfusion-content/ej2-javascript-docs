

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
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


