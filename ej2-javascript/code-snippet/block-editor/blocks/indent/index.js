let blocksData = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This is a paragraph with no indentation (indent: 0)'
            }
        ],
        indent: 0
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This paragraph has one level of indentation (indent: 1)'
            }
        ],
        indent: 1
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This paragraph has two levels of indentation (indent: 2)'
            }
        ],
        indent: 2
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Back to no indentation'
            }
        ],
        indent: 0
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
