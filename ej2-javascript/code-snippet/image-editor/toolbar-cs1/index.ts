

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';


//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    toolbar: ['Crop', 'CustomSelection', 'SquareSelection', 'ZoomIn', 'ZoomOut', {text: 'Rotate'}],
    width: '550px',
    height: '350px',
    toolbarItemClicked: (args: ToolbarClickEventArgs) => {
        if (args.item.text === 'Rotate') {
            imageEditorObj.rotate(90);
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


