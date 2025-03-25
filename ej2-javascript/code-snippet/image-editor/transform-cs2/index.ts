

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
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

new Button({cssClass: `e-primary`, content:'Horizontal Flip'}, '#btnClick');
(document.getElementById('btnClick') as HTMLElement).onclick = function () {
    imageEditorObj.flip("Horizontal"); // Horizontal flip
};
