

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';


//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '350px',
    toolbar: [{text: 'Custom'}],
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    },
    toolbarItemClicked: (args: ClickEventArgs) => {
        if (args.item.text === 'Custom') {
            imageEditorObj.rotate(90);
        }
    }
    });
    imageEditorObj.appendTo('#imageeditor');


