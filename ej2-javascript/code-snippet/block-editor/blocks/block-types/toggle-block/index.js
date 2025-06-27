let blocksData = [
    {
        type: 'ToggleHeading1',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Collapsible Section'
            }
        ],
        isExpanded: true,
        children: [
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ej.blockeditor.ContentType.Text,
                        content: 'This content is inside a toggle section and can be collapsed.'
                    }
                ]
            }
        ]
    },
    {
        type: 'ToggleParagraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Toggle paragraph section'
            }
        ],
        isExpanded: false,
        children: [
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ej.blockeditor.ContentType.Text,
                        content: 'This content is initially hidden because isExpanded is set to false.'
                    }
                ]
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
