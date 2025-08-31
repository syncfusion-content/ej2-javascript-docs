import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Heading',
        props: { level: 1 },
        content: [
            {
                type: ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level: 2 },
        content: [
            {
                type: ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level: 3 },
        content: [
            {
                type: ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level: 4 },
        content: [
            {
                type: ContentType.Text,
                content: 'Sub-section Details'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
