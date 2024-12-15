

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    uploadSettings: {
        minFileSize: 1024,   // Minimum file size in bytes (1 KB)
        maxFileSize: 90 * 1024  // Maximum file size in bytes (90 KB)
    }
});
imageEditorObj.appendTo('#imageeditor');

(document.getElementById('loadInvalidImage') as HTMLElement).onclick = function () {
    imageEditorObj.open('flower.jpeg');
};
