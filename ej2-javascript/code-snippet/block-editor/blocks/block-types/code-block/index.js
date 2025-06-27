let blocksData = [
    {
        type: 'Code',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,  
                content: 'function greeting() {\n  console.log("Hello, world!");\n}'
            }
        ],
        codeSettings: {
            defaultLanguage: 'javascript',
            languages: [
                { language: 'javascript', label: 'JavaScript' },
                { language: 'typescript', label: 'TypeScript' },
                { language: 'html', label: 'HTML' },
                { language: 'css', label: 'CSS' }
            ]
        }
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
