let blocksData = [
    {
        type: 'CollapsibleParagraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Collapsible Section'
            }
        ],
        props:{
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
    }
    },
    {
        type: 'CollapsibleParagraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Toggle paragraph section'
            }
        ],
        props:{
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
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
