

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    enableRtl: true,
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

let loader = document.getElementById('loader');
let container = document.getElementById('container');
if (loader) {
    loader.style.display = "none";
}
if (container) {
    container.style.visibility = "visible";
}
