ej.base.enableRipple(true);

var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
var fileManagerObj = new ej.filemanager.FileManager({
  ajaxSettings: {
    url: hostUrl + 'api/FileManager/FileOperations',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    downloadUrl: hostUrl + 'api/FileManager/Download'
  },
  fileOpen: fileOpen,
  width: '550px',
  height: '150px'
});
fileManagerObj.appendTo('#filemanager');

function fileOpen(args) {
  let file = args.fileDetails;
  let fileName = file.name;
  let filePath = file.filterPath.replace(/\\/g, '/') + fileName;
  let basePath = document.getElementById('filemanager').ej2_instances[0];
  let imagePath = `${basePath.ajaxSettings.getImageUrl}?path=${filePath}`;
  if (file.isFile) {
    args.cancel = true;
    imageEditorObj.open(imagePath);
  }
}

var imageEditorObj = new ej.imageeditor.ImageEditor({ width: '550px', height: '350px' }, '#imageeditor');
