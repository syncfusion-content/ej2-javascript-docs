

import { ImageEditor, ImageFilterOption } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

    //Button click
    document.getElementById('chromeClick').onclick = (): void => {
        imageEditorObj.applyImageFilter(ImageFilterOption.Chrome);
    }
    document.getElementById('coldClick').onclick = (): void => {
        imageEditorObj.applyImageFilter(ImageFilterOption.Cold);
    }
   
    document.getElementById('warmClick').onclick = (): void => {
        imageEditorObj.applyImageFilter(ImageFilterOption.Warm);
    }
    document.getElementById('grayscaleClick').onclick = (): void => {
        imageEditorObj.applyImageFilter(ImageFilterOption.Grayscale);
    }
    document.getElementById('sepiaClick').onclick = (): void => {
        imageEditorObj.applyImageFilter(ImageFilterOption.Sepia);
    }
    document.getElementById('invertClick').onclick = (): void => {
        imageEditorObj.applyImageFilter(ImageFilterOption.Invert);
    }


