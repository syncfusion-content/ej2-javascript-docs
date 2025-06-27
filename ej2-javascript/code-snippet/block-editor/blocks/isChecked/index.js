let blocksData = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Task List:'
            }
        ]
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        isChecked: false
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'High priority task'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Low priority task'
            }
        ],
        isChecked: false
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
