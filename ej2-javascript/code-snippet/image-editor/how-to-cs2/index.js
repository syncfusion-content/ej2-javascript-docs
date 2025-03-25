ej.base.enableRipple(true);

var dialog = new ej.popups.Dialog({
  isModal: true,
  content: document.getElementById("imageeditor"),
  width: '340px',
  height: '420px',
  closeOnEscape: true,
  visible: false,
  minHeight: '400px',
});
dialog.appendTo('#profile-dialog');

var imageEditorObj = new ej.imageeditor.ImageEditor();
imageEditorObj.appendTo('#imageeditor');

document.getElementById('openDialog').onclick = function () {
  dialog.show();
  setTimeout(() => {
    imageEditorObj.open('flower.png');
  }, 10);
};