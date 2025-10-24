var rangeObj = new ej.inputs.Slider({
  value: [0, 50],
  type: 'Range',
  min: 0,
  max: 400,
  change: onChange,
});
rangeObj.appendTo('#range');

var editor = new ej.richtexteditor.RichTextEditor({
  value: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`,
  height: 400,
});
editor.appendTo('#editor');

function onChange(args) {
  const [start, end] = args.value;
  const panel = editor.contentModule.getEditPanel();
  const textNode = panel.firstChild.firstChild;
  const max_lenght = textNode.length; 

  const safeStart = Math.min(start, max_lenght);
  const safeEnd = Math.min(end, max_lenght);

  const range = document.createRange();
  range.setStart(textNode, safeStart);
  range.setEnd(textNode, safeEnd);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
}

editor.addEventListener('created', () => {
  const panel = editor.contentModule.getEditPanel();
  const realLength = panel.firstChild.firstChild.textContent.length;
  rangeObj.max = realLength; 
  rangeObj.dataBind();
});
