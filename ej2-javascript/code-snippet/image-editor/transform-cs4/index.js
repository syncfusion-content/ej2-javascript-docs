ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
	width: '550px',
	height: '330px',
    toolbar: [],
	zoomSettings: {
        zoomFactor: 5
    },
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

document.getElementById('btnClick').onclick = function() {
	imageEditorObj.zoom(-.1); // Zoom out
}

