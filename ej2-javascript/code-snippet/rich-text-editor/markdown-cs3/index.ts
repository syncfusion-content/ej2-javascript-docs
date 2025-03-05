import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Link, Image, MarkdownEditor, Toolbar, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { marked } from 'marked';

RichTextEditor.Inject(Link, Image, MarkdownEditor, Toolbar, QuickToolbar);

let textArea: HTMLTextAreaElement;
let mdsource: HTMLElement;
let htmlPreview: HTMLElement;

let defaultRTE: RichTextEditor = new RichTextEditor({
    value: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`,
    height: 340, editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
            { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>' }, '|', 'Undo', 'Redo']
    },
    created: () => {
        textArea = defaultRTE.contentModule.getEditPanel() as HTMLTextAreaElement;
        textArea.addEventListener('keyup', (e: KeyboardEventArgs) => { markDownConversion(); });
        let rteObj: RichTextEditor = defaultRTE;
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', (e: MouseEvent) => {
            fullPreview({ mode: true, type: 'preview' });
            if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
                defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'Undo', 'Redo', 'CreateTable']);
            } else {
                defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'Undo', 'Redo', 'CreateTable']);
            }
        });
    },
});
defaultRTE.appendTo('#defaultRTE');
function markDownConversion(): void {
    if (mdsource.classList.contains('e-active')) {
        let id: string = defaultRTE.getID() + 'html-preview';
        let htmlPreview: HTMLElement = defaultRTE.element.querySelector('#' + id);
        let rteElement = defaultRTE.contentModule.getEditPanel() as HTMLTextAreaElement;
        let rteValue = rteElement.value;
        htmlPreview.innerHTML = marked((defaultRTE.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    }
}
function fullPreview(e: { [key: string]: string | boolean }): void {
    let id: string = defaultRTE.getID() + 'html-preview';
    htmlPreview = defaultRTE.element.querySelector('#' + id);
    if (mdsource.classList.contains('e-active')) {
        mdsource.classList.remove('e-active');
        mdsource.parentElement.title = 'Preview';
        textArea.style.display = 'block';
        textArea.style.width = '100%';
        htmlPreview.style.display = 'none';
    } else {
        mdsource.classList.add('e-active');
        if (!htmlPreview) {
            htmlPreview = createElement('div', { className: 'e-content' });
            htmlPreview.id = id;
            textArea.parentNode.appendChild(htmlPreview);
        }
        if (e.type === 'preview') {
            textArea.style.display = 'none'; htmlPreview.classList.add('e-pre-source');
        } else {
            htmlPreview.classList.remove('e-pre-source');
            textArea.style.width = '50%';
        }
        htmlPreview.style.display = 'block';
        markDownConversion();
        mdsource.parentElement.title = 'Code View';
    }
}



