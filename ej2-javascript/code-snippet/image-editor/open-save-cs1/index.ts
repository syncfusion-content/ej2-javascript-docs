

import { ImageEditor } from '@syncfusion/ej2-image-editor';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
});
imageEditorObj.appendTo('#imageeditor');

(document.getElementById('open') as HTMLElement).onclick = function () {
    imageEditorObj.open('bee-eater.png');
}; 
