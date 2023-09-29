

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        imageEditorObj.open('bee-eater.png');
        }
    });
    imageEditorObj.appendTo('#imageeditor');

    document.getElementById('aspectClick').onclick = (): void => {
        imageEditorObj.resize(300, 400, true);
    }
    document.getElementById('nonaspectClick').onclick = (): void => {
        imageEditorObj.resize(400, 100, false);
    }


