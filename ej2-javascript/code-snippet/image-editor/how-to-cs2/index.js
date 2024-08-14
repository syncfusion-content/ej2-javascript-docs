ej.base.enableRipple(true);

var dialog = new ej.dialog.Dialog({
  isModal: true,
  content: document.getElementById("imageeditor"),
  width: '340px',
  height: '420px',
  closeOnEscape: true,
  visible: false,
});

dialog.appendTo('#profile-dialog');

document.getElementById('dialog-btn').onclick = function () {
  dialog.show();
  imageEditorObj.open('./images/flower.png');
};

var imageEditorObj = new ej.imageeditor.ImageEditor({
  theme: 'Material',
  zoomSettings: { minZoomFactor: 0.1, maxZoomFactor: 50 },
});

imageEditorObj.appendTo('#imageeditor');