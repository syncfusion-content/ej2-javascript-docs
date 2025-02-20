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

document.getElementById('drawShapes').onclick = function () {
  let dimension = imageEditorObj.getImageDimension();
  imageEditorObj.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, null, null, 'red');
  imageEditorObj.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, null, null, 'red');
  imageEditorObj.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, null, null, 'green');
  imageEditorObj.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, null, null, 'red');
};
document.getElementById('bringForward').onclick = function () {
  imageEditorObj.bringForward('shape_3');
};
document.getElementById('sendBackward').onclick = function () {
  imageEditorObj.sendBackward('shape_3');
};
document.getElementById('bringToFront').onclick = function () {
  imageEditorObj.bringToFront('shape_3');
};
document.getElementById('sendToBack').onclick = function () {
  imageEditorObj.sendToBack('shape_3');
};
