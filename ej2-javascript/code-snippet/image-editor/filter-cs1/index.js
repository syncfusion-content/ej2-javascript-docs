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

document.getElementById('chromeClick').onclick = function() {
	imageEditorObj.applyImageFilter('Chrome');
}
document.getElementById('coldClick').onclick = function() {
	imageEditorObj.applyImageFilter('Cold');
}
document.getElementById('warmClick').onclick = function() {
	imageEditorObj.applyImageFilter('Warm');
}
document.getElementById('grayscaleClick').onclick = function() {
	imageEditorObj.applyImageFilter('Grayscale');
}
document.getElementById('sepiaClick').onclick = function() {
	imageEditorObj.applyImageFilter('Sepia');
}
document.getElementById('invertClick').onclick = function() {
	imageEditorObj.applyImageFilter('Invert');
}

