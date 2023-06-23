

import { Uploader } from '@syncfusion/ej2-inputs';
// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    dropArea: document.getElementById('droparea')
});
// render initialized Uploader
uploadObject.appendTo('#fileupload');

document.getElementById('browse').onclick = function() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    return false;
}


