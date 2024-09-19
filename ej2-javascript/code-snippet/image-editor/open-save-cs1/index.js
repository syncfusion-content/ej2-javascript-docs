ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
});
imageEditorObj.appendTo('#imageeditor');

document.getElementById('open').onclick = function () {
  imageEditorObj.open('bee-eater.png');
};
