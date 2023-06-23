
var defaultRTE = new ej.richtexteditor.RichTextEditor({ 
 placeholder:'Type Something',
  });
defaultRTE.appendTo('#defaultRTE');

document.getElementById('btn').onclick = function(){
  var element = defaultRTE.contentModule.getDocument().getElementById("key");
  var selectioncursor = new ej.richtexteditor.NodeSelection();
  var range = document.createRange();
  range.setStart(element, 1); // to set the range 
  selectioncursor.setRange(document, range); // to set the cursor
}


