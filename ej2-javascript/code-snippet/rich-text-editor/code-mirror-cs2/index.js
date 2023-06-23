var defaultRTE = new ej.richtexteditor.RichTextEditor({ toolbarSettings: {
        items: ['SourceCode']
    },
    showCharCount: true,
    actionComplete: actionCompleteHandler });
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

