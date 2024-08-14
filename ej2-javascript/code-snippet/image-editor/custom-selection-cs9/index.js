ej.base.enableRipple(true);

var imageEditorObj = new ej.imageeditor.ImageEditor({
  width: '550px',
  height: '330px',
	created: function () {
		if (ej.base.Browser.isDevice) {
			imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
	},
  selectionChanging: selectionChanging
});
imageEditorObj.appendTo('#imageeditor');
function selectionChanging (args) {
  if (args.action === "insert" && args.currentSelectionSettings.type === "Custom") {
    args.currentSelectionSettings.height = 200;
    args.currentSelectionSettings.width = 200;
  }
}
