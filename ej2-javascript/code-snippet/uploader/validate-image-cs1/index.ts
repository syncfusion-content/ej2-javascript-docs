

import { Uploader } from '@syncfusion/ej2-inputs';


let uploadObj: any = new Uploader({
    asyncSettings: {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    autoUpload: false,
    allowedExtensions: 'image/*',
    selected: onSelect

});
uploadObj.appendTo('#fileupload');

function onSelect(args: any): void {
  if (args.event.type === 'drop') {
    let allImages: Array<string> = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
    let files = args.filesData;
    let modifiedFiles = [];
    for (let file of files) {
      if (allImages.indexOf(file.type) === -1) {
        file.status = 'File type is not allowed';
        file.statusCode = '0';
      }
      modifiedFiles.push(file);
    }
    args.isModified = true;
    args.modifiedFilesData = modifiedFiles.concat(uploadObj.filesData);
  }
}


