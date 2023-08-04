

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';

//Image Editor items definition

 let id: string;
 let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: ['Annotate', "Line", "Rectangle", "Ellipse", "Circle", "Arrow", "Path"],
    showQuickAccessToolbar:  false,
    shapeChanging: (args: shapeChanging) => {
        if (args.action === 'select') {
            id = args.currentShapeSettings.id;  
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

     //Button click
    document.getElementById('btnClick').onclick = (): void => {
        imageEditorObj.deleteShape(id);
    }


