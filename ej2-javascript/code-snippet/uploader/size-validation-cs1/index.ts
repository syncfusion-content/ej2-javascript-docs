

import { Uploader  } from '@syncfusion/ej2-inputs';

    // Initialize the uploader component
    let uploadObj: Uploader = new Uploader({
        asyncSettings: {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
        },
        minFileSize: 10000,
        maxFileSize: 1500000
    });
    uploadObj.appendTo('#fileupload');


