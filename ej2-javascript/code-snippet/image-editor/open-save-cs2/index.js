ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    created: function () {
        if (ej.base.Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');

var blobUrl;
document.getElementById('saveImage').onclick = function () {
    var imageData = imageEditorObj.getImageData();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob(function (blob) {
        blobUrl = URL.createObjectURL(blob);
    });
}

document.getElementById('setImage').onclick = function () {
    imageEditorObj.open(blobUrl);
};
