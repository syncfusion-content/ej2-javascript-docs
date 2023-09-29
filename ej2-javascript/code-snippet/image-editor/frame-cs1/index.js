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
    imageEditorObj.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
  }
  document.getElementById('bevelClick').onclick = function() {
    imageEditorObj.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
  }
  document.getElementById('lineClick').onclick = function() {
    imageEditorObj.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
  }
  document.getElementById('insetClick').onclick = function() {
    imageEditorObj.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
  }
  document.getElementById('hookClick').onclick = function() {
    imageEditorObj.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
  }



