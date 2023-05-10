/**
* Rich Text Editor Custom FontSize and FontFamily
*/
var defaultRTE = new ej.richtexteditor.RichTextEditor({
  height: 340,
  toolbarSettings: {
    items: [ 'FontColor', 'BackgroundColor']
  },
  backgroundColor: {
      modeSwitcher : true
  },
  fontColor: {
      modeSwitcher : true
  } 
});
defaultRTE.appendTo('#defaultRTE');

