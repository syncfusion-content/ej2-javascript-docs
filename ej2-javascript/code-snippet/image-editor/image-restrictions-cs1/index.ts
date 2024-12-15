

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    uploadSettings: {
        allowedExtensions: ".png, .svg"
    }
});
imageEditorObj.appendTo('#imageeditor');

(document.getElementById('loadInvalidImage') as HTMLElement).onclick = function () {
    imageEditorObj.open('flower.jpeg');
};
