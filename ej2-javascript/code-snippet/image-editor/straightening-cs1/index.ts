

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition
 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    created: () => {
        imageEditorObj.open('bee-eater.png');
        }
    });
    imageEditorObj.appendTo('#imageeditor');


