var blockData = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Document Export Demo'
            }
        ]
    },
    {
        id: 'intro-paragraph',
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
            }
        ]
    },
    {
        id: 'features-heading',
        type: 'Heading2',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Export Features'
            }
        ]
    },
    {
        id: 'features-list',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'JSON export for data processing'
            }
        ]
    },
    {
        id: 'features-list-2',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'HTML export for web display'
            }
        ]
    },
    {
        id: 'features-list-3',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Print functionality for hard copies'
            }
        ]
    },
    {
        id: 'code-example',
        type: 'Code',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'var data = editor.getDataAsJson();\nconsole.log(data);'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Get All Data as JSON
(document.getElementById('getJsonAllBtn')).addEventListener('click', () => {
    var jsonData = blockEditor.getDataAsJson();
    var formattedJson = JSON.stringify(jsonData, null, 2);
    displayOutput(`All blocks as JSON:\n\n${formattedJson}`);
});

// Get Specific Block Data as JSON
(document.getElementById('getJsonBlockBtn')).addEventListener('click', () => {
    var blockData = blockEditor.getDataAsJson('title-block');
    var formattedJson = JSON.stringify(blockData, null, 2);
    displayOutput(`Block "title-block" as JSON:\n\n${formattedJson}`);
});

// Get All Data as HTML
(document.getElementById('getHtmlAllBtn')).addEventListener('click', () => {
    var htmlData = blockEditor.getDataAsHtml();
    displayOutput(`All blocks as HTML:\n\n${htmlData}`);
});

// Get Specific Block Data as HTML
(document.getElementById('getHtmlBlockBtn')).addEventListener('click', () => {
    var blockHtml = blockEditor.getDataAsHtml('intro-paragraph');
    displayOutput(`Block "intro-paragraph" as HTML:\n\n${blockHtml}`);
});

// Print Editor Content
(document.getElementById('printContentBtn')).addEventListener('click', () => {
    blockEditor.print();
    displayOutput('Print dialog opened. Check for a new browser window/tab with the printable content.');
});

// Output helper function
function displayOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}