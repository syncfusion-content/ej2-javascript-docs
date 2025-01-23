var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// initialize File Manager control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManagerAccess/FileOperations',
        uploadUrl: hostUrl +'api/FileManagerAccess/Upload',
        downloadUrl: hostUrl +'api/FileManagerAccess/Download',
        getImageUrl: hostUrl +'api/FileManagerAccess/GetImage'
    },
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

