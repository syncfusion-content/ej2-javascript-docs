// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    autoUpload: false,
    dropArea: document.getElementById('droparea')
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');