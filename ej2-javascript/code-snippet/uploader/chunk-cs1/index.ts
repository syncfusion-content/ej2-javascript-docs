

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        // split the files into chunks of the size 102400 bytes
        chunkSize: 102400
    }
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


