ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
	toolbar: ['Crop', 'CustomSelection', 'SquareSelection', 'ZoomIn', 'ZoomOut', {text: 'Rotate'}],
  width: '550px',
  height: '350px',
  toolbarItemClicked: (args) => {
    if (args.item.text === 'Rotate') {
      imageEditorObj.rotate(90);
    }
  },
  created: function () {
    if (ej.base.Browser.isDevice) {
      imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
    } else {
        imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
    }
  }
  });
  imageEditorObj.appendTo('#imageeditor');


