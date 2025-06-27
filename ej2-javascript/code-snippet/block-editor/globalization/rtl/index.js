let blocksData = [
    {
        id: 'block-1',
        type: 'Heading1',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    }
];

var blockeditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    enableRtl: true
});
blockeditor.appendTo('#blockeditor_rtl');
