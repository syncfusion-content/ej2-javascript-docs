var preLoadFiles = [
    { name: 'Books', size: 500, type: '.png' },
    { name: 'Movies', size: 12000, type: '.pdf' },
    { name: 'Study materials', size: 500000, type: '.docx' },
];
// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    files: preLoadFiles
});
// render initialized Uploader
uploadObject.appendTo('#fileupload');

