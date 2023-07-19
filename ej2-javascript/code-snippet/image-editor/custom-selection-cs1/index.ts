

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
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
    let button: Button = new Button({cssClass: `e-primary`, content:'Click'}, '#btnClick');
    document.getElementById('btnClick').onclick = (): void => {
        imageEditorObj.export("PNG", "Syncfusion"); // File type, file name
    }


