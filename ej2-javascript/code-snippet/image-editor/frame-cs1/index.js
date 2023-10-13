ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: ['Frame', 'Save', 'Reset'],
	created: function () {
		imageEditorObj.open('bee-eater.png');
	}
  });
  imageEditorObj.appendTo('#imageeditor');

  document.getElementById('matClick').onclick = function() {
    imageEditorObj.drawFrame('Mat', 'red', 'blue', 20, 20, 20, 20, 'Solid', 1);
  }
  document.getElementById('bevelClick').onclick = function() {
    imageEditorObj.drawFrame('Bevel', 'red', 'blue', 20, 20, 20, 20, 'Solid', 1);
  }
  document.getElementById('lineClick').onclick = function() {
    imageEditorObj.drawFrame('Line', 'red', 'blue', 20, 20, 20, 20, 'Solid', 1);
  }
  document.getElementById('insetClick').onclick = function() {
    imageEditorObj.drawFrame('Inset', 'red', 'blue', 20, 20, 20, 20, 'Solid', 1);
  }
  document.getElementById('hookClick').onclick = function() {
    imageEditorObj.drawFrame('Hook', 'red', 'blue', 20, 20, 20, 20, 'Solid', 1);
  }



