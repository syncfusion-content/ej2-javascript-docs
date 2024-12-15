ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  uploadSettings: {
    allowedExtensions: ".png, .svg",
  }
});
imageEditorObj.appendTo('#imageeditor');

document.getElementById('loadInvalidImage').onclick = function () {
    imageEditorObj.open('flower.jpeg');
};