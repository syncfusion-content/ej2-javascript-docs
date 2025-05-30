

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

(document.getElementById('addText') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawText(dimension.x, dimension.y, 'Syncfusion');
};
(document.getElementById('outline') as HTMLElement).onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawText(dimension.x + 50, dimension.y + 50, 'Syncfusion', 'Arial', 30, false, false, '', false, null, '', 'green', 8);
};
(document.getElementById('background') as HTMLElement).onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawText(dimension.x + 100, dimension.y + 100, 'Syncfusion', 'Arial', 30, false, false, '', false, null, 'red', '', null);
};
