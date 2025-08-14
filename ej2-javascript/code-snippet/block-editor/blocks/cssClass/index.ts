import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Heading',
        props: {level : 1},
        content: [
            {
                type: ContentType.Text,
                content: 'Custom CSS Classes in Block Editor'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Default paragraph block'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is an info block'
            }
        ],
        cssClass: 'info-block'
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a warning block'
            }
        ],
        cssClass: 'warning-block'
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a success block'
            }
        ],
        cssClass: 'success-block'
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is an error block'
            }
        ],
        cssClass: 'error-block'
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a custom font block'
            }
        ],
        cssClass: 'custom-font'
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
