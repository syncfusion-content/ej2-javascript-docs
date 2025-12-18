var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView, ej.filemanager.Toolbar, ej.filemanager.NavigationPane);
// initialize File Manager control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    height: '380px',
    cssClass: 'fm_template',
    largeIconsTemplate: function (item) {
        const formattedDate = item.dateCreated
        ? new Date(item.dateCreated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : '';
        return `
        <div style="display: flex; flex-direction: column; gap: 2px;">
            <span><strong>${item.name}</strong></span>
            <span><strong>Type: </strong>${ item.isFile ? 'File' : 'Folder' }</span>
            <span><strong>Modified: </strong>${formattedDate}</span>
        </div>
    `;
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');