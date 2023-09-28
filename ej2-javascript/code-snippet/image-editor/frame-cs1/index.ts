

import { ImageEditor, FrameLineStyle, FrameType } from '@syncfusion/ej2-image-editor';
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

     //Button click

     document.getElementById('matClick').onclick = (): void => {
        imageEditorObj.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    document.getElementById('bevelClick').onclick = (): void => {
        imageEditorObj.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    document.getElementById('lineClick').onclick = (): void => {
        imageEditorObj.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    document.getElementById('insetClick').onclick = (): void => {
        imageEditorObj.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    document.getElementById('hookClick').onclick = (): void => {
        imageEditorObj.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }


