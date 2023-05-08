

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    autoUpload: false,
    dropArea: document.getElementById('droparea')
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


