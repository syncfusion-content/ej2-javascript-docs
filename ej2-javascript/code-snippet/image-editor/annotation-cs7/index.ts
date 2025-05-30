

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    shapeChanging: (args: shapeChanging) => {
        if (args.currentShapeSettings.type === 'FreehandDraw') {
            args.currentShapeSettings.strokeColor = 'red',
                args.currentShapeSettings.strokeWidth = 5
        }
    },
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');
