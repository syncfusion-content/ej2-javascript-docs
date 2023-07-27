

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '350px',
    toolbarTemplate: '#toolbarTemplate',
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

    let button: Button = new Button({content: 'Enable FreeHandDraw'}).appendTo('#dltbtn');
    document.getElementById('dltbtn').onclick = (): void => {
       imageEditorObj.freeHandDraw(true);
    }


