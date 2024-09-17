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

document.getElementById('add-redact').onclick = function () {
  let dimension = imageEditorObj.getImageDimension();
  imageEditorObj.drawRedact(RedactType.Blur, dimension.x, dimension.y, 200, 300);
}

document.getElementById('update-redact').onclick = function () {
  let redacts = imageEditorObj.getRedacts();
  if (redacts.length > 0) {
    redacts[redacts.length - 1].blurIntensity = 100;
    imageEditorObj.updateRedact(redacts[redacts.length - 1]);
  }
}

document.getElementById('select-redact').onclick = function () {
  let redacts = imageEditorObj.getRedacts();
  if (redacts.length > 0) {
    imageEditorObj.selectRedact(redacts[redacts.length - 1].id);
  }
}

document.getElementById('delete-redact').onclick = function () {
  let redacts = imageEditorObj.getRedacts();
  if (redacts.length > 0) {
    imageEditorObj.deleteRedact(redacts[redacts.length - 1].id);
  }
}