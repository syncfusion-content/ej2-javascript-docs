var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
// inject feature modules of the file manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// initialize File Manager component
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    created: function() {
        var largeicon_view = document.getElementById('filemanager_largeicons');
        var details_view = document.getElementById('filemanager_grid');
        //Bind keyup event for both LargeIcons and Details view.
        largeicon_view.addEventListener('keyup', keyUpHandler);
        details_view.addEventListener('keyup', keyUpHandler);
    }
});
// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

function keyUpHandler(event) {
    //Prevent all the keyboard interactions.
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}