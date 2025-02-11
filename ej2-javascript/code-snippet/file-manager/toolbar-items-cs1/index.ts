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
    height: "330px"
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// Click event for enable button
document.getElementById("enable")?.addEventListener("click", function (args) {
    // Enable new folder toolbar item
    filemanagerInstance.enableToolbarItems(["newfolder"]);
});
// Click event for enable button
document.getElementById("disable")?.addEventListener("click", function (args) {
    // Enable new folder toolbar item
    filemanagerInstance.disableToolbarItems(["newfolder"]);
});