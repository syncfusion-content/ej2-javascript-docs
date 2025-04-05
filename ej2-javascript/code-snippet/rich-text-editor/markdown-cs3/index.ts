import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import {
  RichTextEditor,
  Link,
  Image,
  MarkdownEditor,
  Table,
  Toolbar,
} from '@syncfusion/ej2-richtexteditor';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import Marked from 'marked';

RichTextEditor.Inject(Link, Image, MarkdownEditor, Table, Toolbar);

let textArea: HTMLTextAreaElement;
let mdsource: HTMLElement;
let htmlPreview: HTMLElement;

<<<<<<< HEAD
let defaultRTE: RichTextEditor = new RichTextEditor({
=======
let editor: RichTextEditor = new RichTextEditor({
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
          '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
          '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
      },
    ],
  },
  created: () => {
<<<<<<< HEAD
    textArea = defaultRTE.contentModule.getEditPanel() as HTMLTextAreaElement;
    textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
      markDownConversion();
    });
    let rteObj: RichTextEditor = defaultRTE;
=======
    textArea = editor.contentModule.getEditPanel() as HTMLTextAreaElement;
    textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
      markDownConversion();
    });
    let rteObj: RichTextEditor = editor;
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    mdsource = document.getElementById('preview-code');
    mdsource.addEventListener('click', (e: MouseEvent) => {
      fullPreview({ mode: true, type: 'preview' });
      if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
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
function markDownConversion(): void {
  if (mdsource.classList.contains('e-active')) {
<<<<<<< HEAD
    let id: string = defaultRTE.getID() + 'html-view';
    let htmlPreview: HTMLElement = defaultRTE.element.querySelector('#' + id);
    htmlPreview.innerHTML = Marked(
      (defaultRTE.contentModule.getEditPanel() as HTMLTextAreaElement).value
=======
    let id: string = editor.getID() + 'html-view';
    let htmlPreview: HTMLElement = editor.element.querySelector('#' + id);
    htmlPreview.innerHTML = Marked(
      (editor.contentModule.getEditPanel() as HTMLTextAreaElement).value
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    );
  }
}
function fullPreview(): void {
<<<<<<< HEAD
  let id: string = defaultRTE.getID() + 'html-preview';
  let htmlPreview: HTMLElement = defaultRTE.element.querySelector('#' + id);
  let previewTextArea: HTMLElement = defaultRTE.element.querySelector(
=======
  let id: string = editor.getID() + 'html-preview';
  let htmlPreview: HTMLElement = editor.element.querySelector('#' + id);
  let previewTextArea: HTMLElement = editor.element.querySelector(
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    '.e-rte-content'
  ) as HTMLElement;
  if (mdsource.classList.contains('e-active')) {
    mdsource.classList.remove('e-active');
    mdsource.parentElement.title = 'Preview';
    textArea.style.display = 'block';
    htmlPreview.style.display = 'none';
    previewTextArea.style.overflow = 'hidden';
  } else {
    mdsource.classList.add('e-active');
    if (!htmlPreview) {
      htmlPreview = createElement('div', {
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
    htmlPreview.innerHTML = Marked(
<<<<<<< HEAD
      (defaultRTE.contentModule.getEditPanel() as HTMLTextAreaElement).value
=======
      (editor.contentModule.getEditPanel() as HTMLTextAreaElement).value
>>>>>>> e565562a0a5f8d08f1b5455b3b345a79184d65cb
    );
    mdsource.parentElement.title = 'Code View';
  }
}
