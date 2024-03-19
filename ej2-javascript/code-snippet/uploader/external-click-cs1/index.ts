

import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the control by preload files
let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
});
uploadObj.appendTo('#fileupload');

document.getElementById('browse').onclick = () => {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
};



