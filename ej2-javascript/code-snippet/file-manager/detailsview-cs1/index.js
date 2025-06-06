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
    // Initial view of File Manager is set to details view
    view: "Details",
    // Details View settings customization
    detailsViewSettings: {
        columns: [
            { field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' }, template: '${name}' },
            { field: 'size', headerText: 'File Size', minWidth: 50, width: '110', template: '${size}' },
            { field: '_fm_modified', headerText: 'Date Modified', minWidth: 50, width: '190' }
        ]
    },
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');