

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    // disable the auto upload functionalities
    autoUpload: false
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');


