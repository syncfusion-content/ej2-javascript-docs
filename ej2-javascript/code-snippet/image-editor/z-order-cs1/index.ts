

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

(document.getElementById('drawShapes') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, null, null, 'red');
    imageEditorObj.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, null, null, 'red');
    imageEditorObj.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, null, null, 'green');
    imageEditorObj.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, null, null, 'red');
};
(document.getElementById('bringForward') as HTMLElement).onclick = function () {
    imageEditorObj.bringForward('shape_3');
};
(document.getElementById('sendBackward') as HTMLElement).onclick = function () {
    imageEditorObj.sendBackward('shape_3');
};
(document.getElementById('bringToFront') as HTMLElement).onclick = function () {
    imageEditorObj.bringToFront('shape_3');
};
(document.getElementById('sendToBack') as HTMLElement).onclick = function () {
    imageEditorObj.sendToBack('shape_3');
};
