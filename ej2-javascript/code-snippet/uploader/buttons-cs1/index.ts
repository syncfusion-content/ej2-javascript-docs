

import {  Uploader } from '@syncfusion/ej2-inputs';
import { createElement } from '@syncfusion/ej2-base';

let uploadEle = createElement('span', { className: 'upload e-icons' });
uploadEle.innerHTML = 'Upload All';
let clearEle = createElement('span', { className: 'remove e-icons' });
clearEle.innerHTML = 'Clear All';

let uploadObj: Uploader = new Uploader({
	  asyncSettings: {
	    saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
	    removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
	},
    autoUpload: false,
    buttons: {
      browse: 'Choose file',
      clear: clearEle,
      upload: uploadEle
    }
});
uploadObj.appendTo('#fileupload')


