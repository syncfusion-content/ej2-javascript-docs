ej.base.enableRipple(true);

var textArea;
var mdsource;
var htmlPreview;

<<<<<<< HEAD
var defaultRTE = new ej.richtexteditor.RichTextEditor({
=======
var editor = new ej.richtexteditor.RichTextEditor({
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
  value: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`,
  height: 250,
  editorMode: 'Markdown',
  toolbarSettings: {
    items: [
      'CreateTable',
      {
        tooltipText: 'Preview',
        template:
          '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn"  aria-label="Preview Code">' +
          '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
      },
    ],
  },
  created: function () {
<<<<<<< HEAD
    textArea = defaultRTE.contentModule.getEditPanel();
=======
    textArea = editor.contentModule.getEditPanel();
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    textArea.addEventListener('keyup', function (e) {
      markdownConversion();
    });
    mdsource = document.getElementById('preview-code');
    mdsource.addEventListener('click', function (e) {
      fullPreview();
      if (e.currentTarget.classList.contains('e-active')) {
<<<<<<< HEAD
        defaultRTE.disableToolbarItem(['CreateTable']);
      } else {
        defaultRTE.enableToolbarItem(['CreateTable']);
=======
        editor.disableToolbarItem(['CreateTable']);
      } else {
        editor.enableToolbarItem(['CreateTable']);
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
      }
    });
  },
});
editor.appendTo('#editor');

function markDownConversion() {
  if (mdsource.classList.contains('e-active')) {
<<<<<<< HEAD
    var id = defaultRTE.getID() + 'html-view';
    var htmlPreview = document.body.querySelector('#defaultRTEhtml-preview');
    htmlPreview.innerHTML = marked(
      defaultRTE.contentModule.getEditPanel().value
=======
    var id = editor.getID() + 'html-view';
    var htmlPreview = document.body.querySelector('#editorhtml-preview');
    htmlPreview.innerHTML = marked(
      editor.contentModule.getEditPanel().value
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    );
  }
}

function fullPreview(e) {
<<<<<<< HEAD
  var id = defaultRTE.getID() + 'html-preview';
  var htmlPreview = defaultRTE.element.querySelector('#' + id);
  var previewTextArea = defaultRTE.element.querySelector('.e-rte-content');
=======
  var id = editor.getID() + 'html-preview';
  var htmlPreview = editor.element.querySelector('#' + id);
  var previewTextArea = editor.element.querySelector('.e-rte-content');
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
  if (mdsource.classList.contains('e-active')) {
    mdsource.classList.remove('e-active');
    mdsource.parentElement.title = 'Preview';
    textArea.style.display = 'block';
    htmlPreview.style.display = 'none';
    previewTextArea.style.overflow = 'hidden';
  } else {
    mdsource.classList.add('e-active');
    if (!htmlPreview) {
      htmlPreview = ej.base.createElement('div', {
        className: 'e-content e-pre-source',
      });
      htmlPreview.id = id;
      textArea.parentNode.appendChild(htmlPreview);
      previewTextArea.style.overflow = 'auto';
    }
    if (previewTextArea.style.overflow === 'hidden') {
      previewTextArea.style.overflow = 'auto';
    }
    textArea.style.display = 'none';
    htmlPreview.style.display = 'block';
    htmlPreview.innerHTML = marked(
<<<<<<< HEAD
      defaultRTE.contentModule.getEditPanel().value
=======
      editor.contentModule.getEditPanel().value
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    );
    mdsource.parentElement.title = 'Code View';
  }
}

loadExternalFile();
// Dynamically load the marked.js file
function loadExternalFile() {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}
