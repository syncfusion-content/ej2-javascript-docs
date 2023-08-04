

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
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');

    let button: Button = new Button({content: 'Enable FreeHandDraw'}).appendTo('#dltbtn');
    document.getElementById('dltbtn').onclick = (): void => {
       imageEditorObj.freeHandDraw(true);
    }


