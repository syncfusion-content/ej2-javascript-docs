ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '350px',
    toolbar: ['Annotation' , 'Finetune' , 'Filter' , 'Confirm' , 'Reset' , 'Save', 'ZoomIn', 'ZoomOut'],
     created: function () {
        if (ej.base.Browser.isDevice) {
          imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
      }
  });
  imageEditorObj.appendTo('#imageeditor');


