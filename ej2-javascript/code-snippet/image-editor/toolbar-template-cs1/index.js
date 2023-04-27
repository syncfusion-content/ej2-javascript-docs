ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '350px',
	toolbarTemplate: '#toolbarTemplate',
    created: function () {
        if (ej.base.Browser.isDevice) {
			imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
     }
  });
  imageEditorObj.appendTo('#imageeditor');
  document.getElementById('dltbtn').onclick = function() {
	imageEditorObj.freeHandDraw(true);
  }


