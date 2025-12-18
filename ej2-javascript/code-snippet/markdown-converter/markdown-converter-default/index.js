ej.base.enableRipple(true);

var textArea;
var srcArea;
var markdownConverter = ej.markdownconverter.MarkdownConverter;

var markdownRTE = new ej.richtexteditor.RichTextEditor({
    height: '520px',
    value:
        'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The Syncfusion’s <b>Markdown Converter</b> is used in this sample to convert markdown into HTML content.',
    placeholder: 'Enter your text here...',
    formatter: new ej.richtexteditor.MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' } }),
    editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'Blockquote', 'OrderedList', 'UnorderedList', 'SuperScript', 'SubScript', '|',
            'CreateLink', 'Image', 'CreateTable', '|',
            {
                tooltipText: 'Preview',
                template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn"  aria-label="Preview Code">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
            }, '|', 'Undo', 'Redo'
        ]

    },
    created: function () {
        textArea = defaultRTE.contentModule.getEditPanel();
        textArea.addEventListener('keyup', function (e) {
            markdownConversion();
        });
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', function (e) {
            fullPreview();
            if (e.currentTarget.classList.contains('e-active')) {
                defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo'
                ]);
            } else {
                defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'SuperScript', 'SubScript', 'CreateLink', 'Image', 'CreateTable', 'Formats', 'Blockquote', 'Undo', 'Redo'
                ]);
            }
        });
    }
});
markdownRTE.appendTo('#markdown-editor');

function markdownConversion() {
    if (mdsource.classList.contains('e-active')) {
        var id = defaultRTE.getID() + 'html-view';
        var htmlPreview = document.body.querySelector('#defaultRTEhtml-preview');
        htmlPreview.innerHTML = markdownConverterr.toHtml(defaultRTE.contentModule.getEditPanel().value, {
            async: true,
            gfm: true,
            lineBreak: true,
            silence: true
        });
    }
}

function fullPreview() {
    var id = defaultRTE.getID() + 'html-preview';
    var htmlPreview = defaultRTE.element.querySelector('#' + id);
    var previewTextArea = defaultRTE.element.querySelector('.e-rte-content');
    if (mdsource.classList.contains('e-active')) {
        mdsource.classList.remove('e-active');
        mdsource.parentElement.title = 'Preview';
        textArea.style.display = 'block';
        htmlPreview.style.display = 'none';
        previewTextArea.style.overflow = 'hidden';
    }
    else {
        mdsource.classList.add('e-active');
        if (!htmlPreview) {
            htmlPreview = ej.base.createElement('div', { className: 'e-content e-pre-source' });
            htmlPreview.id = id;
            textArea.parentNode.appendChild(htmlPreview);
            previewTextArea.style.overflow = 'auto';
        }
        if (previewTextArea.style.overflow === 'hidden') {
            previewTextArea.style.overflow = 'auto';
        }
        textArea.style.display = 'none';
        htmlPreview.style.display = 'block';
        htmlPreview.innerHTML = markdownConverter.toHtml(defaultRTE.contentModule.getEditPanel().value, {
            async: true,
            gfm: true,
            lineBreak: true,
            silence: true
        });
        mdsource.parentElement.title = 'Code View';
    }
}

