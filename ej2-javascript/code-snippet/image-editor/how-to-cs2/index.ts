

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';
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

document.getElementById('dialog-btn').onclick = function () {
dialog.show();
imageEditorObj.open('./images/flower.png');
};

let imageEditorObj: ImageEditor = new ImageEditor({
theme: 'Material',
zoomSettings: { minZoomFactor: 0.1, maxZoomFactor: 50 },
});

imageEditorObj.appendTo('#imageeditor');
