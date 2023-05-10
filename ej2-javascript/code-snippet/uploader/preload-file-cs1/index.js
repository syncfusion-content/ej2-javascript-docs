var preLoadFiles = [
    { name: 'Books', size: 500, type: '.png' },
    { name: 'Movies', size: 12000, type: '.pdf' },
    { name: 'Study materials', size: 500000, type: '.docx' },
];
// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    files: preLoadFiles
});
// render initialized Uploader
uploadObject.appendTo('#fileupload');

