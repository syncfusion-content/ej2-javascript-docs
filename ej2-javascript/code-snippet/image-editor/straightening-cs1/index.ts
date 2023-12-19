

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition
 let straighten: number = 0;
 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    created: () => {
        imageEditorObj.open('bee-eater.png');
        }
    });
    imageEditorObj.appendTo('#imageeditor');

    document.getElementById('straightenLeft').onclick = (): void => {
        straighten -= 3;
        imageEditorObj.straightenImage(straighten);
    }
    document.getElementById('straightenRight').onclick = (): void => {
        straighten += 3;
        imageEditorObj.straightenImage(straighten);
    }
    document.getElementById('reset').onclick = (): void => {
        straighten = 0;
        imageEditorObj.straightenImage(straighten);
    }


