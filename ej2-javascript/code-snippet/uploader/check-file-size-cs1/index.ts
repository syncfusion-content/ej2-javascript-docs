


import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the control by preload files
let uploadObj: Uploader = new Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    uploading: onBeforeUpload
});
uploadObj.appendTo('#fileupload');

function onBeforeUpload(args): void {
    // get the file size in bytes
    let sizeInBytes: number = args.fileData.size;
    // get the file size in standard format
    alert("File size is: " + uploadObj.bytesToSize(sizeInBytes));
}



