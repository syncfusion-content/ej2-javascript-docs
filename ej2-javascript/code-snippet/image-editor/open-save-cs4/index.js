ej.base.enableRipple(true);

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

let fileManagerObj = new ej.filemanager.FileManager({
  ajaxSettings: {
      url: hostUrl + 'api/FileManager/FileOperations',
      getImageUrl: hostUrl + 'api/FileManager/GetImage',
      uploadUrl: hostUrl + 'api/FileManager/Upload',
      downloadUrl: hostUrl + 'api/FileManager/Download'
  },
  allowMultiSelection:true,
  fileOpen: fileOpen
});

fileManagerObj.appendTo('#filemanager');

function fileOpen(args) {
  let file = args.fileDetails;
  if (file.isFile) {
      args.cancel = true;
      if (file.size <= 0 ) { file.size = 10000; }
      let imagePath = args.fileDetails._fm_imageUrl;
      imageEditorObj.open(imagePath);
  }
}

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('bee-eater.png');
    } else {
        imageEditorObj.open('bee-eater.png');
    }
	}
});
imageEditorObj.appendTo('#imageeditor');
