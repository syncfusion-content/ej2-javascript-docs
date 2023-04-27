

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
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    });
    imageEditorObj.appendTo('#imageeditor');


