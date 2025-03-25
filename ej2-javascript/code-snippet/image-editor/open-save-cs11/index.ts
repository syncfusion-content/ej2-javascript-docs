

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    },
    beforeSave: () => {
        const dimension = imageEditorObj.getImageDimension();
        imageEditorObj.drawText(dimension.x + 100, dimension.y, 'Syncfusion', 'Arial', 40, false, false, '#80330075');
    },
    saved: () => {
        const shapes = imageEditorObj.getShapeSettings();
        imageEditorObj.deleteShape(shapes[shapes.length - 1].id);
    },
});
imageEditorObj.appendTo('#imageeditor');
