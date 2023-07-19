ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '350px',
    toolbar: [{text: 'Custom'}],
     created: function () {
        if (ej.base.Browser.isDevice) {
          imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
      },
      toolbarItemClicked: function (args) {
        if (args.item.text === 'Custom') {
          imageEditorObj.rotate(90);
        }
      }
  });
  imageEditorObj.appendTo('#imageeditor');


