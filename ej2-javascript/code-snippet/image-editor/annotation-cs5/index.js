ej.base.enableRipple(true);

var id;
var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: ['Annotate', "Line", "Rectangle", "Ellipse", "Circle", "Arrow", "Path"],
    showQuickAccessToolbar: false,
    shapeChanging: (args) => {
      if (args.action === 'select') {
          id = args.currentShapeSettings.id;  
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

document.getElementById('btnClick').onclick = function() {
	imageEditorObj.deleteShape(id)
}

