

import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the control by preload files
let uploadObj: Uploader = new Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    uploading: onBeforeUpload
});
uploadObj.appendTo('#fileupload');

function onBeforeUpload(args): void {
    // get the file MIME type
    alert("File MIME type is: " + args.fileData.rawFile.type)
}



