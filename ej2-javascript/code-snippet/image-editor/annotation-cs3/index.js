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

document.getElementById('addText').onclick = function () {
  let dimension = imageEditorObj.getImageDimension();
  imageEditorObj.drawText(dimension.x, dimension.y, 'Enter\nText');
};
document.getElementById('deleteText').onclick = function () {
  imageEditorObj.deleteShape('shape_1');
};
