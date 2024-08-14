

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser, getComponent } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
            }
        }
});
imageEditorObj.appendTo('#imageeditor');
var blobUrl: any;
document.getElementById('saveImage').onclick = function() {
    var imageData = imageEditorObj.getImageData();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    var base64Url = canvas.toDataURL();
    canvas.toBlob(function(blob){
        blobUrl = URL.createObjectURL(blob as any);
    });
}
document.getElementById('setImage').onclick = function() {
    imageEditorObj.open(blobUrl);
};
