ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
	created: function () {
        imageEditorObj.open('bee-eater.png');
	}
  });
  imageEditorObj.appendTo('#imageeditor');

  document.getElementById('aspectClick').onclick = function() {
    imageEditorObj.resize(400, 300, true);
  }

  document.getElementById('nonaspectClick').onclick = function() {
    imageEditorObj.resize(400, 100, false);
  }

