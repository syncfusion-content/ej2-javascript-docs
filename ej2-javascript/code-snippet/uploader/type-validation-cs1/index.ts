

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
    let uploadObj: Uploader = new Uploader({
        asyncSettings: {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
        },
        allowedExtensions: '.jpg,.png'
    });
    uploadObj.appendTo('#fileupload');


