

import { ImageEditor } from '@syncfusion/ej2-image-editor';
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
    document.getElementById('btnClick').onclick = (): void => {
        let dimension: any = imageEditorObj.getImageDimension();
        imageEditorObj.drawLine(dimension.x, dimension.y);
    }


