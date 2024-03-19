

import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the control by preload files
let uploadObj: Uploader = new Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    }
});
uploadObj.appendTo('#fileupload');

document.getElementById('first').onclick = (args) => {
    uploadObj.upload(uploadObj.getFilesData()[0]);
};

document.getElementById('full').onclick = (args) => {
    uploadObj.upload(uploadObj.getFilesData());
};


