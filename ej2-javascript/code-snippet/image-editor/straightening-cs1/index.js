ej.base.enableRipple(true);

var straighten = 0;
var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '330px',
    toolbar: [],
	created: function () {
        imageEditorObj.open('bee-eater.png');
	}
  });
  imageEditorObj.appendTo('#imageeditor');

  document.getElementById('straightenLeft').onclick = function() {
    straighten -= 3;
    imageEditorObj.straightenImage(straighten);
  }

  document.getElementById('straightenRight').onclick = function() {
    straighten += 3;
    imageEditorObj.straightenImage(straighten);
  }

  document.getElementById('reset').onclick = function() {
    straighten = 0;
    imageEditorObj.straightenImage(straighten);
  }

