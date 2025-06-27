let paragraphBlock = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This is a paragraph block example.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: paragraphBlock
});
blockEditor.appendTo('#blockEditor');