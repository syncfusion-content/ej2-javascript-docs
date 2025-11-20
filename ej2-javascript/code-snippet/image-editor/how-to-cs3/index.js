ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  created: function () {
    if (ej.base.Browser.isDevice) {
      imageEditorObj.open('flower.png');
    } else {
      imageEditorObj.open('bee-eater.png');
    }
  }
});
imageEditorObj.appendTo('#imageeditor');

document.getElementById('fitwidth').onclick = function () {
  imageEditorObj.zoom(1); // Reset zoom to original size before applying Fit Width
  var containerWidth = imageEditorObj.upperCanvas.width;
  var oldWidth = imageEditorObj.getImageDimension().width;
  var imageWidth = oldWidth, zoomFactor = 0.1, newZoom = 1;
  while (imageWidth < containerWidth) {
    newZoom++;
    imageWidth = oldWidth * (1 + zoomFactor);
    zoomFactor += 0.1;
  }
  imageEditorObj.zoom(newZoom);
};

document.getElementById('fitheight').onclick = function () {
  imageEditorObj.zoom(1); // Reset zoom to original size before applying Fit Height
  var containerHeight = imageEditorObj.upperCanvas.height;
  var oldHeight = imageEditorObj.getImageDimension().height;
  var imageHeight = oldHeight, zoomFactor = 0.1, newZoom = 1;
  while (imageHeight < containerHeight) {
    newZoom++;
    imageHeight = oldHeight * (1 + zoomFactor);
    zoomFactor += 0.1;
  }
  imageEditorObj.zoom(newZoom);
};
