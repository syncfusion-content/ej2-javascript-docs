

import { ImageEditor, RedactType, Dimension, RedactSettings } from '@syncfusion/ej2-image-editor';
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

document.getElementById('add-redact').onclick = (): void => {
    let dimension: Dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawRedact(RedactType.Blur, dimension.x, dimension.y, 200, 300);
}

document.getElementById('update-redact').onclick = (): void => {
    let redacts: RedactSettings[] = imageEditorObj.getRedacts();
    if (redacts.length > 0) {
        redacts[redacts.length - 1].blurIntensity = 100;
        imageEditorObj.updateRedact(redacts[redacts.length - 1]);
    }
}

document.getElementById('select-redact').onclick = (): void => {
    let redacts: RedactSettings[] = imageEditorObj.getRedacts();
    if (redacts.length > 0) {
        imageEditorObj.selectRedact(redacts[redacts.length - 1].id);
    }
}

document.getElementById('delete-redact').onclick = (): void => {
    let redacts: RedactSettings[] = imageEditorObj.getRedacts();
    if (redacts.length > 0) {
        imageEditorObj.deleteRedact(redacts[redacts.length - 1].id);
    }
}