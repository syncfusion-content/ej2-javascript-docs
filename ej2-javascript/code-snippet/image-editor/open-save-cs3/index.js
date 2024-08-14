ej.base.enableRipple(true);

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
var uploadObject = new ej.Uploader.Uploader({
  selected: function (args) {
    if (args.filesData.length > 0) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            imageEditorObj.open(reader_1.result);
        };
        reader_1.readAsDataURL(args.filesData[0].rawFile);
    }
    document.querySelector('.e-upload-files').remove();
  }
});
uploadObject.appendTo('#fileupload');
