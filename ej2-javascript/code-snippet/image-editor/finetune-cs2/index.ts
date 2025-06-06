

import { ImageEditor, ImageFinetuneOption } from '@syncfusion/ej2-image-editor';
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

(document.getElementById('hueClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Hue, 20);
};
(document.getElementById('exposureClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Exposure, 20);
};
(document.getElementById('blurClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Blur, 20);
};
(document.getElementById('opacityClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Opacity, 70);
};