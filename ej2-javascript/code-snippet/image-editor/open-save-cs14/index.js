ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  toolbar: [],
  created: function () {
    imageEditorObj.open('bee-eater.png');
  }
});
imageEditorObj.appendTo('#imageEditor');

var containsBtn = new ej.buttons.Button({}, '#contains');
var coverBtn = new ej.buttons.Button({}, '#cover');
var stretchBtn = new ej.buttons.Button({}, '#stretch');

containsBtn.element.onclick = function () {
  imageEditorObj.open('bee-eater.png', true, {
    backgroundColor: '',
    width: 550,
    height: null,
    isAspectRatio: true
  });
};
coverBtn.element.onclick = function () {
  imageEditorObj.open('bee-eater.png', true, {
    backgroundColor: '',
    width: 550,
    height: 550,
    isAspectRatio: true
  });
};
stretchBtn.element.onclick = function () {
  imageEditorObj.open('bee-eater.png', true, {
    backgroundColor: '',
    width: 330,
    height: 330,
    isAspectRatio: false
  });
};