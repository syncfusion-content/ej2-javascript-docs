

import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the control by preload files
let uploadObj: Uploader = new Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    }
});
uploadObj.appendTo('#fileupload');

document.getElementById('first').onclick = (args) => {
    uploadObj.upload(uploadObj.getFilesData()[0]);
};

document.getElementById('full').onclick = (args) => {
    uploadObj.upload(uploadObj.getFilesData());
};


