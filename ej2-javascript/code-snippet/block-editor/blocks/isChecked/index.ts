import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Task List:'
            }
        ]
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        props: {isChecked: true}
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        props: {isChecked: false}
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ContentType.Text,
                content: 'High priority task'
            }
        ],
        props: {isChecked: true}
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ContentType.Text,
                content: 'Low priority task'
            }
        ],
        props: {isChecked: false}
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
