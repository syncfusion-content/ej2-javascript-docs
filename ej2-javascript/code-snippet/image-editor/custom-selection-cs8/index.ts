

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Button } from '@syncfusion/ej2-buttons';
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
    selectionChanging: selectionChanging
});
imageEditorObj.appendTo('#imageeditor');
function selectionChanging (args: any) {
    if (args.action == "resize") {
      args.currentSelectionSettings = args.previousSelectionSettings;
    }
}
  