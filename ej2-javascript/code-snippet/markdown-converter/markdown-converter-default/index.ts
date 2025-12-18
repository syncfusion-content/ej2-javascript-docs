import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import {
    RichTextEditor,
    Link,
    Image,
    MarkdownEditor,
    Toolbar,
    Table,
} from '@syncfusion/ej2-richtexteditor';
import { MarkdownFormatter } from '@syncfusion/ej2-richtexteditor';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
RichTextEditor.Inject(Link, Image, MarkdownEditor, Toolbar, Table);

let textArea: HTMLTextAreaElement;
let mdsource: HTMLElement;

let markdownRTE: RichTextEditor = new RichTextEditor({
    height: '520px',
    value:
        'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The Syncfusion’s <b>Markdown Converter</b> is used in this sample to convert markdown into HTML content.',
    placeholder: 'Enter your text here...',
    formatter: new MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' } }),
    editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Blockquote', 'OrderedList',
            'UnorderedList', 'SuperScript', 'SubScript', '|', 'CreateLink', 'Image', 'CreateTable', '|',
            {
                tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
            }, '|', 'Undo', 'Redo']

    },
    created: () => {
        textArea = markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement;
        textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
            markDownConversion();
        });
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', (e: MouseEvent) => {
            fullPreview();
            if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
                markdownRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo']);
            } else {
                markdownRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo']);
            }
        });
    }
});
markdownRTE.appendTo('#markdown-editor');

function markDownConversion(): void {
    if (mdsource.classList.contains('e-active')) {
        let id: string = markdownRTE.getID() + 'html-view';
        let htmlPreview: HTMLElement = markdownRTE.element.querySelector('#' + id);
        htmlPreview.innerHTML = MarkdownConverter.toHtml((markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement).value, {
            async: true,
            gfm: true,
            lineBreak: true,
            silence: true
        }) as string;
    }
}
function fullPreview(): void {
    let id: string = markdownRTE.getID() + 'html-preview';
    let htmlPreview: HTMLElement = markdownRTE.element.querySelector('#' + id);
    let previewTextArea: HTMLElement = markdownRTE.element.querySelector('.e-rte-content') as HTMLElement;
    if (mdsource.classList.contains('e-active')) {
        mdsource.classList.remove('e-active');
        mdsource.parentElement.title = 'Preview';
        textArea.style.display = 'block';
        htmlPreview.style.display = 'none';
        previewTextArea.style.overflow = 'hidden';
    } else {
        mdsource.classList.add('e-active');
        if (!htmlPreview) {
            htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
            htmlPreview.id = id;
            textArea.parentNode.appendChild(htmlPreview);
            previewTextArea.style.overflow = 'auto';
        }
        if (previewTextArea.style.overflow === 'hidden') {
            previewTextArea.style.overflow = 'auto';
        }
        textArea.style.display = 'none';
        htmlPreview.style.display = 'block';
        htmlPreview.innerHTML = MarkdownConverter.toHtml((markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement).value, {
            async: true,
            gfm: true,
            lineBreak: true,
            silence: true
        }) as string;
        mdsource.parentElement.title = 'Code View';
    }
}