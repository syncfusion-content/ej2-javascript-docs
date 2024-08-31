

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
});
dialog.appendTo('#profile-dialog');

let imageEditorObj: ImageEditor = new ImageEditor();
imageEditorObj.appendTo('#imageeditor');

document.getElementById('dialog-btn').onclick = function () {
    dialog.show();
    imageEditorObj.open('flower.png');
};
