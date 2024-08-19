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
	},
  beforeSave: () => {
    var dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawText(
      dimension.x + 100,
      dimension.y,
      'Syncfusion',
      'Arial',
      40,
      false,
      false,
      '#80330075'
    );
  },
  saved: () => {
    var shapes = imageEditorObj.getShapeSettings();
    imageEditorObj.deleteShape(shapes[shapes.length - 1].id);
  },
});
imageEditorObj.appendTo('#imageeditor');
