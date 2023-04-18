


import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);
import { createElement } from '@syncfusion/ej2-base';

let defaultRTE: RichTextEditor = new RichTextEditor({ toolbarSettings: {
  items: ['SourceCode']},
  showCharCount: true,
  actionComplete: actionCompleteHandler});
defaultRTE.appendTo('#defaultRTE');

let myCodeMirror: any;

function mirrorConversion(e?: any): void {
  let textArea: HTMLElement = defaultRTE.contentModule.getEditPanel() as HTMLElement;
  let id: string = defaultRTE.getID() + 'mirror-view';
  let mirrorView: HTMLElement = defaultRTE.element.querySelector('#' + id) as HTMLElement;
  let charCount: HTMLElement = defaultRTE.element.querySelector('.e-rte-character-count') as HTMLElement;
  if (e.targetItem === 'Preview') {
      textArea.style.display = 'block';
      mirrorView.style.display = 'none';
      textArea.innerHTML = myCodeMirror.getValue();
      charCount.style.display = 'block';
  } else {
      if (!mirrorView) {
          mirrorView = createElement('div', { className: 'e-content' });
          mirrorView.id = id;
          textArea.parentNode.appendChild(mirrorView);
      } else {
          mirrorView.innerHTML = '';
      }
      textArea.style.display = 'none';
      mirrorView.style.display = 'block';
      renderCodeMirror(mirrorView, defaultRTE.value);
      charCount.style.display = 'none';
  }
}

function renderCodeMirror(mirrorView: HTMLElement, content: string): void {
  myCodeMirror = CodeMirror(mirrorView, {
      value: content,
      lineNumbers: true,
      mode: 'text/html',
      lineWrapping: true,

  });
}

function actionCompleteHandler(e: any): void {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
        this.sourceCodeModule.getPanel().style.display = 'none';
        mirrorConversion(e);
    } else {
        setTimeout(() => { defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
}



