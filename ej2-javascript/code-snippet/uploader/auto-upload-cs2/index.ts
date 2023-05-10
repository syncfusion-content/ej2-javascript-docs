

import { Uploader, UploadingEventArgs } from '@syncfusion/ej2-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    autoUpload: false,
    uploading: onUploadBegin
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

function onUploadBegin(args: UploadingEventArgs): void {
    // check whether the file is uploading from paste.
    if (args.fileData.fileSource === 'paste') {
        let newName: string = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
        args.customFormData = [{'fileName': newName}];
    }
}


