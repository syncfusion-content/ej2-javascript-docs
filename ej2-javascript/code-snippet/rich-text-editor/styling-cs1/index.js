/**
 * Rich Text Editor FontSize and FontFamily sample 
 */
var defaultRTE = new ej.richtexteditor.RichTextEditor({
    height: 340,
    toolbarSettings: {
    items: [ 'FontName', 'FontSize']
    },
    fontSize: {
        width: '40px'
    },
    fontFamily: {
        width: '60px'
    }
});
defaultRTE.appendTo('#defaultRTE');

