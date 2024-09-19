

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { FileManager, FileOpenEventArgs } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize FileManager component
let fileManagerObj: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    fileOpen: fileOpen,
    width: '535px',
    height: '150px'
});
fileManagerObj.appendTo('#filemanager');

function fileOpen(args: FileOpenEventArgs): void {
    let file: any = (args as any).fileDetails;
    let fileName: string = file.name;
    let filePath: string = file.filterPath.replace(/\\/g, '/') + fileName;
    let basePath = (document.getElementById('filemanager') as any)?.ej2_instances[0];
    let imagePath = `${basePath.ajaxSettings.getImageUrl}?path=${filePath}`;
    if (file.isFile) {
        args.cancel = true;
        imageEditorObj.open(imagePath);
    }
}

var imageEditorObj = new ImageEditor({ width: '550px', height: '350px' }, '#imageeditor');
