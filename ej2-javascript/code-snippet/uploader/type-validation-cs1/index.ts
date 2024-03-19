

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
    let uploadObj: Uploader = new Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        allowedExtensions: '.jpg,.png'
    });
    uploadObj.appendTo('#fileupload');


