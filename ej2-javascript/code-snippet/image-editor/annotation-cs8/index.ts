

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

(document.getElementById('freeHandDraw') as HTMLElement).onclick = function () {
    imageEditorObj.freeHandDraw(true);
};
(document.getElementById('freeHandDrawDelete') as HTMLElement).onclick = function () {
    imageEditorObj.deleteShape('pen_1');
};
