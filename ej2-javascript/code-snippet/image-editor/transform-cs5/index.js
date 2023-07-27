ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
	height: '330px',
    toolbar: [],
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

document.getElementById('btnClick').onclick = function() {
	imageEditorObj.zoom(2); // Zoom in
    imageEditorObj.pan(true);
}

