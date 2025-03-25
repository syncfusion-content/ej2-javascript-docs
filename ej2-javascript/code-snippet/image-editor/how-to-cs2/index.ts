

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Dialog } from '@syncfusion/ej2-popups';
//Image Editor items definition

var dialog: Dialog = new Dialog({
    isModal: true,
    content: document.getElementById("imageeditor"),
    width: '340px',
    height: '420px',
    closeOnEscape: true,
    visible: false,
    minHeight: '400px',
});
dialog.appendTo('#profile-dialog');

let imageEditorObj: ImageEditor = new ImageEditor();
imageEditorObj.appendTo('#imageeditor');

(document.getElementById('openDialog') as HTMLElement).onclick = function () {
    dialog.show();
    setTimeout(() => {
        imageEditorObj.open('flower.png');
    }, 10);
};
