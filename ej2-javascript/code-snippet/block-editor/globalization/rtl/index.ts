import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        id: 'block-1',
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    }
];


const blockEditor: BlockEditor = new BlockEditor({
    blocks: blocksData,
    enableRtl: true
});
 
blockEditor.appendTo('#blockeditor_rtl');
