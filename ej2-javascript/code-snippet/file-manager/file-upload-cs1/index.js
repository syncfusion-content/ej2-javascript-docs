var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// Initialize the Uploader Control
var uploadObject = new ej.inputs.Uploader({});
uploadObject.appendTo('#fileupload');

// Initialize the Button Control
var btnObj = new ej.buttons.Button({});
btnObj.appendTo('#openBtn');

// Initialize the Dialog Control
var dialogObj = new ej.popups.Dialog({
    header: 'Select a file',
    showCloseIcon: true,
    closeOnEscape: false,
    width: '850px',
    visible: false,
    target: document.getElementById('target'),
    animationSettings: { effect: 'None' },
    open: dialogOpen,
    close: dialogClose
});
dialogObj.appendTo('#dialog');

var contextmenuItems = ['Open', '|', 'Cut', 'Copy', 'Delete', 'Rename', '|', 'Details'];

// Initialize the FileManager Control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    allowMultiSelection: false,
    toolbarSettings: {
        items: ['NewFolder', 'Upload', 'Delete', 'Cut', 'Copy', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details']},
        contextMenuSettings: {
        file: contextmenuItems,
        folder: contextmenuItems
    },
    fileOpen : onFileOpen,
    height: '380px'
});
filemanagerInstance.appendTo('#filemanager');

document.getElementById('openBtn').onclick = function() {
    dialogObj.show();
    dialogOpen();
    filemanagerInstance.path = '/';
    filemanagerInstance.selectedItems = [];
    filemanagerInstance.refresh();
};

// 'Uploader' will be shown, if Dialog is closed
function dialogClose() {
    document.getElementById('fileupload').style.display = 'block';
}

// 'Uploader' will be hidden, if Dialog is opened
function dialogOpen() {
    document.getElementById('fileupload').style.display = 'none';
}

// File Manager's fileOpen event function
function onFileOpen(args) {
    var file = args.fileDetails;
    if (file.isFile) {
        args.cancel = true;
        if (file.size <= 0 ) { file.size = 10000; }
        uploadObject.files = [{name: file.name, size: file.size, type: file.type }];
        dialogObj.hide();
    }
}


