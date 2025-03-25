

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

(document.getElementById('drawText') as HTMLElement).onclick = function () {
    imageEditorObj.drawText();
};
(document.getElementById('undoClick') as HTMLElement).onclick = function () {
    imageEditorObj.undo();
};
(document.getElementById('redoClick') as HTMLElement).onclick = function () {
    imageEditorObj.redo();
}
