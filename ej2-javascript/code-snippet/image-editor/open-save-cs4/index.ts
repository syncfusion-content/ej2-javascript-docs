

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import { FileManager, FileOpenEventArgs } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';

let fileManagerObj: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    allowMultiSelection:true,
    fileOpen: fileOpen
});

fileManagerObj.appendTo('#filemanager');

function fileOpen(args: FileOpenEventArgs): void {
    let file: any = (args as any).fileDetails;
    if (file.isFile) {
        args.cancel = true;
        if (file.size <= 0 ) { file.size = 10000; }
        let imagePath = (args.fileDetails as any)._fm_imageUrl;
        imageEditorObj.open(imagePath);
    }
}

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
