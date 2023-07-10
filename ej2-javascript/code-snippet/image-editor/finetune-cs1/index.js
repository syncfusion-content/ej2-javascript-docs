ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
	}
  });
  imageEditorObj.appendTo('#imageeditor');

document.getElementById('brightnessClick').onclick = function() {
	imageEditorObj.finetuneImage('Brightness', 10);
}
document.getElementById('contrastClick').onclick = function() {
	imageEditorObj.finetuneImage('Contrast', 30);
}

