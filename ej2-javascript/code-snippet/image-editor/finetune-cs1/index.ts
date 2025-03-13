

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

(document.getElementById('brightnessClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Brightness, 10);
};
(document.getElementById('contrastClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Contrast, 30);
};
(document.getElementById('saturationClick') as HTMLElement).onclick = function () {
    imageEditorObj.finetuneImage(ImageFinetuneOption.Saturation, 100);
}
