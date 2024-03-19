

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        // set chunk size for enable the chunk upload
        chunkSize: 102400
    }
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


