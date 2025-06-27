let blocksData = [
    {
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Features of the Block Editor'
            }
        ]
    },
    {
        type: 'NumberedList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Step 1: Initialize the Block Editor'
            }
        ]
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Review documentation'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Implement drag and drop functionality'
            }
        ],
        isChecked: false
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
