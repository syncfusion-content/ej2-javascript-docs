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
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        isChecked: false
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'High priority task'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Low priority task'
            }
        ],
        isChecked: false
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
