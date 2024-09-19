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

var uploadObject = new ej.inputs.Uploader({
  selected: function (args) {
    if (args.filesData.length > 0) {
      var reader = new FileReader();
      reader.onload = function () {
        imageEditorObj.open(reader.result);
      };
      reader.readAsDataURL(args.filesData[0].rawFile);
    }
  },
  showFileList: false
});
uploadObject.appendTo('#fileupload');
