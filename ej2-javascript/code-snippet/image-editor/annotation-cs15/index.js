ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  shapeChanging: (args) => {
    if (args.action === "insert" && args.currentShapeSettings?.type === 'FreehandDraw') {
      args.currentShapeSettings.strokeColor = 'red';
    }
  },
  created: function () {
    if (ej.base.Browser.isDevice) {
      imageEditorObj.open('bee-eater.png');
    } else {
      imageEditorObj.open('bee-eater.png');
    }
  }
});
imageEditorObj.appendTo('#imageeditor');
