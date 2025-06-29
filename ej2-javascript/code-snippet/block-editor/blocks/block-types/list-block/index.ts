import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'BulletList',
        content: [
            {
                type: ContentType.Text,
                content: 'Features of the Block Editor'
            }
        ]
    },
    {
        type: 'NumberedList',
        content: [
            {
                type: ContentType.Text,
                content: 'Step 1: Initialize the Block Editor'
            }
        ]
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Review documentation'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Implement drag and drop functionality'
            }
        ],
        isChecked: false
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
