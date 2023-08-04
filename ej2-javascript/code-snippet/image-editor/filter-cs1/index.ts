

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
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
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


