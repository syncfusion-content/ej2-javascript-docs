ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
    width: '550px',
    height: '350px',
     toolbarUpdating: function (args) {
        if (args.toolbarType === 'pen') {
            args.toolbarItems.forEach(item => {
                if (item.align === 'Center' && (item.tooltipText === 'Stroke Width' || item.tooltipText === 'Remove' || item.type === 'Separator')) {
                    item.visible = false;
                }
            });
        }            
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


