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
  imageEditorObj.drawText(dimension.x, dimension.y);
};
document.getElementById('outline').onclick = function () {
  let dimension = imageEditorObj.getImageDimension();
  imageEditorObj.drawText(dimension.x + 100, dimension.y + 100, 'Syncfusion', 'Arial', 70, false, false, '', false, null, '', 'green', 8);
};
document.getElementById('background').onclick = function () {
  let dimension = imageEditorObj.getImageDimension();
  imageEditorObj.drawText(dimension.x + 200, dimension.y + 200, 'Syncfusion', 'Arial', 70, false, false, '', false, null, 'red', '', null);
};
