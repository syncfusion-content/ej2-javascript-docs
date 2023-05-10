

import {  Uploader, FileInfo, SelectedEventArgs } from '@syncfusion/ej2-inputs';
import { Event } from '@syncfusion/ej2-base';

let initial: boolean = true;

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    selected: onSelect

});
uploadObj.appendTo('#fileupload')

function onSelect(args: SelectedEventArgs): void {
    if (initial) { initial = false; return; }
    args.isModified = true;
    let oldFiles: FileInfo[] = uploadObj.getFilesData();
    let filesData: FileInfo[] = args.filesData.concat(oldFiles);
    let modifiedData: FileInfo[] = sortFileList(filesData);
    args.modifiedFilesData = modifiedData;
}

function sortFileList(filesData: FileInfo[]): FileInfo[] {
    let files: FileInfo[] = filesData;
    let fileNames: string[] = [];
    for (let i: number = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }
    let sortedFileNames: string[] = fileNames.sort();
    let sortedFilesData: FileInfo[] = [];
    let index: number = 0;
    for (let name of sortedFileNames) {
        for (let i: number = 0; i < files.length; i++) {
            if (name === files[i].name) {
                sortedFilesData.push(files[i]);
            }
        }
    }
    return sortedFilesData;
}


