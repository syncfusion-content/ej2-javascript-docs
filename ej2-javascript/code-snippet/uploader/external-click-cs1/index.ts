

import { Uploader } from '@syncfusion/ej2-inputs';

//Initialize the control by preload files
let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
});
uploadObj.appendTo('#fileupload');

document.getElementById('browse').onclick = () => {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
};



