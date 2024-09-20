ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  toolbar: [],
  created: function () {
    if (ej.base.Browser.isDevice) {
      imageEditorObj.open('bee-eater.png');
    } else {
      imageEditorObj.open('bee-eater.png');
    }
  }
});
imageEditorObj.appendTo('#imageeditor');

document.getElementById('addImage').onclick = function () {
  let dimension = imageEditorObj.getImageDimension();
  imageEditorObj.drawImage('flower.png', dimension.x, dimension.y, 100, 80, true, 0);
};
