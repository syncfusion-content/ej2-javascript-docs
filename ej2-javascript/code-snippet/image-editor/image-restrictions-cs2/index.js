ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  uploadSettings: {
    minFileSize: 1024,   // Minimum file size in bytes (1 KB)
    maxFileSize: 90 * 1024  // Maximum file size in bytes (90 KB)
  }
});
imageEditorObj.appendTo('#imageeditor');

document.getElementById('loadInvalidImage').onclick = function () {
    imageEditorObj.open('flower.jpeg');
};