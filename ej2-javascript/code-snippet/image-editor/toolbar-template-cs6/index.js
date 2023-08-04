ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '350px',
     created: function () {
        if (ej.base.Browser.isDevice) {
          imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
      },
      toolbarUpdating: (args) => {
        if (args.toolbarType === 'text') {
            args.toolbarItems.push({text: 'custom'})
        }
      }
  });
  imageEditorObj.appendTo('#imageeditor');


