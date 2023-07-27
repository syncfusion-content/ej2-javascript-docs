ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
	height: '330px',
    toolbar: [],
    zoomSettings: {minZoomFactor: 0.1},
    zoomLevel: 1,
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
	if (imageEditorObj.zoomLevel < 1) {
        imageEditorObj.zoomLevel -= 0.1;
    }
    else {
        imageEditorObj.zoomLevel -= 1;
    }
    if (imageEditorObj.zoomLevel < imageEditorObj.zoomSettings.minZoomFactor) {
        imageEditorObj.zoomLevel = imageEditorObj.zoomSettings.minZoomFactor;
    }
    imageEditorObj.zoom(imageEditorObj.zoomLevel); // Zoom out
}

