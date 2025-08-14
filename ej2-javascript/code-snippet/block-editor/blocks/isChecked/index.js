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
        type: 'Checklist',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        props: {isChecked: true}
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        props: {isChecked: false}
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'High priority task'
            }
        ],
        props: {isChecked: true}
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Low priority task'
            }
        ],
        props:{ isChecked: false}
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
