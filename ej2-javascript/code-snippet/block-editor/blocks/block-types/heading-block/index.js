let blocksData = [
    {
        type: 'Heading',
        props: { level: 1 },
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level: 2 },
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level: 3 },
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level: 4 },
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
