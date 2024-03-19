

import { Uploader, FileInfo } from '@syncfusion/ej2-inputs';
import {createElement} from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-popups';

let removeFile: FileInfo[];

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    removing: onremove

});
uploadObj.appendTo('#fileupload');

// Initialize Dialog component
let dialog: Dialog = new Dialog({
    content: 'Are you sure want to remove the file?',
    buttons: [{'click': () => { onClick() }, buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true }},
        {'click': () => {dialog.hide(); }, buttonModel: { content: 'Cancel', cssClass: 'e-flat'} }],
    width: '250px',
    visible: false,
    target: '#container'
});
dialog.appendTo('#dialog');

function onClick() {
  dialog.hide();
  uploadObj.remove(removeFile[0], false, true);
}

function onremove(args: any) {
  removeFile=[];
  args.cancel = true;
  removeFile.push(args.filesData);
  dialog.show();
}


