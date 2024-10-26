import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager component
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    created: () => {
        var largeicon_view = document.getElementById('filemanager_largeicons');
        var details_view = document.getElementById('filemanager_grid');
        //Bind keyup event for both LargeIcons and Details view.
        largeicon_view?.addEventListener('keyup', keyUpHandler);
        details_view?.addEventListener('keyup', keyUpHandler);
    }
});
// render initialized FileManager
filemanagerInstance.appendTo('#filemanager');

function keyUpHandler(event) {
    //Prevent all the keyboard interactions.
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}