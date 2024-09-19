ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
  fontFamily: {
    default: 'Arial', items: [{ id: 'arial', text: 'Arial' }, { id: 'brush script mt', text: 'Brush Script MT' },
    { id: 'papyrus', text: 'Papyrus' }, { id: 'times new roman', text: 'Times New Roman' }, { id: 'courier new', text: 'Courier New' }]
  },
  created: function () {
    if (ej.base.Browser.isDevice) {
      imageEditorObj.open('bee-eater.png');
    } else {
      imageEditorObj.open('bee-eater.png');
    }
  }
});
imageEditorObj.appendTo('#imageeditor');
