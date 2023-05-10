 ej.base.enableRipple(true);

//Initialize the control by preload files
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
});
uploadObj.appendTo('#fileupload');

document.getElementById('browse').onclick = function() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
};

