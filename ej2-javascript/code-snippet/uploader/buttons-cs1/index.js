ej.base.enableRipple(true);
// Initialize the uploader component
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    autoUpload: false,
    buttons: {
      browse: 'Choose file',
      clear: clearEle,
      upload: uploadEle
    }
});
uploadObj.appendTo('#fileupload');

var uploadEle = ej.base.createElement('span', { className: 'upload e-icons' });
uploadEle.innerHTML = 'Upload All';
var clearEle = ej.base.createElement('span', { className: 'remove e-icons' });
clearEle.innerHTML = 'Clear All';



