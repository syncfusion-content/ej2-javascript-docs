

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    }
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


