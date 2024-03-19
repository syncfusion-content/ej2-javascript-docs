// initialize Uploader component
var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    selected : onupload,
    locale: 'en-US',
    allowedExtensions: '.png, .jpg, .jpeg'
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

function onupload(args) {    
    for(var i = 0; i< args.filesData.length ; i++){
        var liparentDiv = createElement('div',  { className: 'image-list'});
        var liImage = createElement('img',  { className: 'image'});
        liparentDiv.appendChild(liImage);
        readURL(liImage, args.filesData[i]);
        document.getElementById('preview').appendChild(liparentDiv);
    }
    args.cancel=true;
}

function readURL(liImage, file) {
    var imgPreview = liImage;
    var imageFile = file.rawFile;
    var reader = new FileReader();
    reader.addEventListener( 'load', () => {
        imgPreview.src = reader.result;
    }, false);
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
};


