ej.base.enableRipple(true);

var dialog = new ej.popups.Dialog({
  isModal: true,
  content: document.getElementById("imageeditor"),
  width: '340px',
  height: '420px',
  closeOnEscape: true,
  visible: false,
});
dialog.appendTo('#profile-dialog');

var imageEditorObj = new ej.imageeditor.ImageEditor();
imageEditorObj.appendTo('#imageeditor');

document.getElementById('openDialog').onclick = function () {
  dialog.show();
  imageEditorObj.open('flower.png');
};