

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

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

let base64String: string;
document.getElementById('saveImage').onclick = function () {
    const imageData = imageEditorObj.getImageData();
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const context = canvas.getContext('2d');
    if (context) {
        context.putImageData(imageData, 0, 0);
        base64String = canvas.toDataURL();
    }
}

document.getElementById('setImage').onclick = function () {
    if (base64String) {
        imageEditorObj.open(base64String);
    }
}
