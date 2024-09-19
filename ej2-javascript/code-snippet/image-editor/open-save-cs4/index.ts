

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import { Uploader, SelectedEventArgs } from '@syncfusion/ej2-inputs';

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
    }
});
imageEditorObj.appendTo('#imageeditor');

let uploadObject: Uploader = new Uploader({
    selected: (args: SelectedEventArgs) => {
        if (args.filesData.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                imageEditorObj.open(reader.result as string);
            };
            reader.readAsDataURL(args.filesData[0].rawFile as Blob);
        }
    },
    showFileList: false
});
uploadObject.appendTo('#fileupload');