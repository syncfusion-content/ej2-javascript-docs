ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
    shapeChanging: (args) => {
      if (args.currentShapeSettings.type === 'Text') {
          args.currentShapeSettings.color = 'red';
      }
  },
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

