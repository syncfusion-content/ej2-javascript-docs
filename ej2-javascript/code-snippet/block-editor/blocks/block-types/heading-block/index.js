let blocksData = [
    {
        type: 'Heading1',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        type: 'Heading2',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        type: 'Heading3',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        type: 'Heading4',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Sub-section Details'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
