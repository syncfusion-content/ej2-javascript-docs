

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';


//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '350px',
    toolbarUpdating: (args: ToolbarEventArgs) => {
        if (args.toolbarType === 'shapes') {
            args.toolbarItems = ['strokeColor'];
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


