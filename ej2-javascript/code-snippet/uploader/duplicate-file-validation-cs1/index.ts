

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Uploader, FileInfo } from '@syncfusion/ej2-inputs';
import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';

    // Initialize the control with file validation
     let uploadObj: Uploader = new Uploader({
        autoUpload: false,
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        selected: onFileSelect,
    });
    uploadObj.appendTo('#validation');

  function onFileSelect(args : any) {
    let existingFiles: FileInfo[] = this.getFilesData();
    for (let i: number = 0; i < args.filesData.length; i++) {
        for(let j: number = 0; j < existingFiles.length; j++) {
            if (!isNullOrUndefined(args.filesData[i])) {
                if (existingFiles[j].name == args.filesData[i].name) {
                    args.filesData.splice(i, 1);
                }
            }
        }
    }
    existingFiles = existingFiles.concat(args.filesData);
    args.modifiedFilesData = existingFiles;
    args.isModified = true;
}


