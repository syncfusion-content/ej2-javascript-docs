

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');

(document.getElementById('rectangle') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
    imageEditorObj.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 70, null, '', '', null, null, 8);
};
(document.getElementById('ellipse') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawEllipse(dimension.x, dimension.y + 200);
};
(document.getElementById('line') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawLine(dimension.x + 300, dimension.y + 30);
};
(document.getElementById('arrow') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawArrow(dimension.x + 150, dimension.y + 150, dimension.x + 300, dimension.y + 150, 10);
};
(document.getElementById('path') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawPath([{ x: dimension.x, y: dimension.y }, { x: dimension.x + 50, y: dimension.y + 50 }, { x: dimension.x + 20, y: dimension.y + 50 }], 8);
};
