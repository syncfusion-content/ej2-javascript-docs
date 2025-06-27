import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        type: 'Heading2',
        content: [
            {
                type: ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        type: 'Heading3',
        content: [
            {
                type: ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        type: 'Heading4',
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
