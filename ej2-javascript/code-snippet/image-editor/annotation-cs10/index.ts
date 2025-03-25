

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

(document.getElementById('drawShape') as HTMLElement).onclick = function () {
    let dimension: any = imageEditorObj.getImageDimension();
    imageEditorObj.drawEllipse(dimension.x + 100, dimension.y + 100);
};

(document.getElementById('deleteShape') as HTMLElement).onclick = function () {
    imageEditorObj.deleteShape('shape_1');
};
