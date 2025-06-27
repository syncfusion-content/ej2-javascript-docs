import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This section discusses the features of the Block Editor.'
            }
        ]
    },
    {
        type: 'Divider'
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This section covers implementation details and usage examples.' 
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
