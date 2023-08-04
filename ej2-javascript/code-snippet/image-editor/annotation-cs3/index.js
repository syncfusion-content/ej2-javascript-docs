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

document.getElementById('rectangleClick').onclick = function() {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawRectangle(dimension.x, dimension.y);
}
document.getElementById('ellipseClick').onclick = function() {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawEllipse(dimension.x, dimension.y);
}
document.getElementById('lineClick').onclick = function() {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawLine(dimension.x, dimension.y);
}
document.getElementById('arrowClick').onclick = function() {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawArrow(dimension.x, dimension.y+10, dimension.x+50, dimension.y+10, 10);
}
document.getElementById('pathClick').onclick = function() {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
}

