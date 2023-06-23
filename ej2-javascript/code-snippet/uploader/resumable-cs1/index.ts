

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader ({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        // set chunk size for enable the chunk upload
        chunkSize: 102400
    }
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


