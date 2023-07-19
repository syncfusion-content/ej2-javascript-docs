

import { ImageEditor, ImageFinetuneOption } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

     //Button click
    document.getElementById('brightnessClick').onclick = (): void => {
        imageEditorObj.finetuneImage(ImageFinetuneOption.Brightness,10);
    }
    document.getElementById('contrastClick').onclick = (): void => {
        imageEditorObj.finetuneImage(ImageFinetuneOption.Contrast,20);
    }


