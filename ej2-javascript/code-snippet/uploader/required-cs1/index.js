 ej.base.enableRipple(true);
var dropElement = document.getElementsByClassName('dropUpload')[0];
// Initialize the uploader component
var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    selected: onFileSelect,
    allowedExtensions: 'image/*',
    multiple: true,
    dropArea: dropElement,
});
uploadObj.appendTo('#fileupload');

document.getElementById('customBrowse').addEventListener('onclick', function() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
});
function onFileSelect(args) {
    if (args.filesData.length > 0) {
        if (document.getElementsByClassName('upload-image').length > 0) {
            ej.base.detach(document.getElementsByClassName('imgWrapper')[0]);
        }
        var imageTag = ej.base.createElement('IMG', { className: 'upload-image', attrs: { 'alt': 'Image' } });
        var wrapper = ej.base.createElement('span', { className: 'imgWrapper' });
        wrapper.appendChild(imageTag);
        var rootFile = document.getElementsByClassName('dropUpload')[0];
        rootFile.insertBefore(wrapper, rootFile.firstChild);
        readURL(wrapper, args.filesData[0]);
    }
    args.cancel = true;
}

function readURL(li, args) {
    var preview = li.querySelector('.upload-image');
    var file = args.rawFile; var reader = new FileReader();
    reader.addEventListener('load', () => { preview.src = reader.result; }, false);
    if (file) { reader.readAsDataURL(file); }
}

var options = {};
var formObj = new ej.inputs.FormValidator('#form1', options);

function onFormSubmit() {
    var formStatus = formObj.validate();
    if (formStatus) {
        formObj.element.reset();
        detach(document.getElementsByClassName('imgWrapper')[0]);
        confirm.show();
    }
}

var confirm = new ej.popups.Dialog({
    width: '335px',
    visible: false,
    header: 'Success',
    content: 'Your details have been updated successfully, Thank you.',
    target: document.getElementById('control_wrapper'),
    showCloseIcon: true,
    isModal: true,
    animationSettings: {
        effect: 'Zoom'
    }
});
confirm.appendTo('#confirmationDialog');

document.getElementById('submit-btn').addEventListener('onclick', function() {
    onFormSubmit();
});


