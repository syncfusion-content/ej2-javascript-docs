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

document.getElementById('rectangle').onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
    imageEditorObj.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 70, null, '', '', null, null, 8);
};
document.getElementById('ellipse').onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawEllipse(dimension.x, dimension.y + 200);
};
document.getElementById('line').onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawLine(dimension.x + 300, dimension.y + 30);
};
document.getElementById('arrow').onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawArrow(dimension.x + 100, dimension.y + 30, dimension.x + 100, dimension.y + 10, 10);
};
document.getElementById('path').onclick = function () {
    let dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawPath([{ x: dimension.x, y: dimension.y }, { x: dimension.x + 50, y: dimension.y + 50 }, { x: dimension.x + 20, y: dimension.y + 50 }], 8);
};
