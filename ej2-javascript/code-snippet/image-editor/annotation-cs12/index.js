ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    shapeChanging: (args) => {
      if (args.currentShapeSettings.type === 'FreehandDraw') {
          args.currentShapeSettings.color = 'red';
          args.currentShapeSettings.strokeWidth = 10
      }
    },
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
	    }
    }
  );
  imageEditorObj.appendTo('#imageeditor');

