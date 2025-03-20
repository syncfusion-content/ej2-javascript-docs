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

document.getElementById('hueClick').onclick = function () {
  imageEditorObj.finetuneImage('Hue', 20);
}
document.getElementById('exposureClick').onclick = function () {
  imageEditorObj.finetuneImage('Exposure', 20);
}
document.getElementById('blurClick').onclick = function () {
  imageEditorObj.finetuneImage('Blur', 20);
}
document.getElementById('opacityClick').onclick = function () {
  imageEditorObj.finetuneImage('Opacity', 70);
}
