

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition
let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');

let byteArray: any;
// Save image as byte[]
(document.getElementById('saveImage') as HTMLElement).onclick = function () {
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
                byteArray = new Uint8Array(reader.result as ArrayBuffer);
            };
        }
    }, 'image/png');
};
(document.getElementById('loadImage') as HTMLElement).onclick = function () {
    if (byteArray) {
        let blob = new Blob([byteArray], { type: 'image/png' });
        let url = URL.createObjectURL(blob);
        imageEditorObj.open(url);
    }
};

