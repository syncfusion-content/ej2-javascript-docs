var defaultRTE = new ej.richtexteditor.RichTextEditor({ toolbarSettings: {
        items: ['SourceCode']
    },
    showCharCount: true,
    value: `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
    actionComplete: actionCompleteHandler
});
defaultRTE.appendTo('#defaultRTE');

var myCodeMirror;

function mirrorConversion(e) {
    var id = defaultRTE.getID() + 'mirror-view';
    var textArea = defaultRTE.contentModule.getEditPanel();
    var mirrorView = defaultRTE.element.querySelector('#' + id);
    var charCount = defaultRTE.element.querySelector('.e-rte-character-count');
    if (e.targetItem === 'Preview') {
        textArea.style.display = 'block';
        mirrorView.style.display = 'none';
        textArea.innerHTML = myCodeMirror.getValue();
        charCount.style.display = 'block';
    }
    else {
        if (!mirrorView) {
            mirrorView = ej.base.createElement('div', { className: 'e-content' });
            mirrorView.id = id;
            textArea.parentNode.appendChild(mirrorView);
        }
        else {
            mirrorView.innerHTML = '';
        }
        textArea.style.display = 'none';
        mirrorView.style.display = 'block';
        renderCodeMirror(mirrorView, defaultRTE.value);
        charCount.style.display = 'none';
    }
}

function renderCodeMirror(mirrorView, content) {
    myCodeMirror = CodeMirror(mirrorView, {
        value: content,
        lineNumbers: true,
        mode: 'text/html',
        lineWrapping: true,
    });
}

function actionCompleteHandler(e) {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
        this.sourceCodeModule.getPanel().style.display = 'none';
        mirrorConversion(e);
    }
    else {
        setTimeout(function () { defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
}