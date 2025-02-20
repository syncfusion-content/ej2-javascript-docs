ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    created: function () {
        if (ej.base.Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');

let byteArray;
// Save image as byte[]
document.getElementById('saveImage').onclick = function () {
    var imageData = imageEditorObj.getImageData();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
        if (blob) {
            let reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onloadend = function () {
                byteArray = new Uint8Array(reader.result);
            };
        }
    }, 'image/png');
};
document.getElementById('loadImage').onclick = function () {
    if (byteArray) {
        let blob = new Blob([byteArray], { type: 'image/png' });
        let url = URL.createObjectURL(blob);
        imageEditorObj.open(url);
    }
};
