ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  toolbar: [],
  created: function () {
    imageEditorObj.open('bee-eater.png');
  },
  showQuickAccessToolbar: false
});
imageEditorObj.appendTo('#imageEditor');

var isTextInserted = false;
var textBtn = new ej.buttons.Button({}, '#text');

textBtn.element.onclick = function () {
  if (!isTextInserted) {
    isTextInserted = true;
    var dimension = imageEditorObj.getImageDimension();
    imageEditorObj.drawText(dimension.x, dimension.y, 'Syncfusion');
    textBtn.element.classList.add('e-disabled');
  }
};
document.getElementById('bold').addEventListener('change', function () {
  updateFontStyle('bold', this.checked);
});
document.getElementById('italic').addEventListener('change', function () {
  updateFontStyle('italic', this.checked);
});
document.getElementById('underline').addEventListener('change', function () {
  updateFontStyle('underline', this.checked);
});
document.getElementById('strikethrough').addEventListener('change', function () {
  updateFontStyle('strikethrough', this.checked);
});
function updateFontStyle(style, isChecked) {
  var shapes = imageEditorObj.getShapeSettings();
  if (shapes && shapes[0]) {
    if (isChecked) {
      if (!shapes[0].fontStyle.includes(style)) {
        shapes[0].fontStyle.push(style);
      }
    } else {
      shapes[0].fontStyle = shapes[0].fontStyle.filter(function (item) { return item !== style; });
    }
    imageEditorObj.updateShape(shapes[0]);
  }
}