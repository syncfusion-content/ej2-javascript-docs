ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
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
document.getElementById('saturationClick').onclick = function() {
	imageEditorObj.finetuneImage('Saturation', 100);
}
