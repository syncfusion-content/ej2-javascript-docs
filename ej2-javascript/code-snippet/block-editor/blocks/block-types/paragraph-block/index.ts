import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const paragraphBlock: BlockModel[] = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a paragraph block example.'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: paragraphBlock
});
blockEditor.appendTo('#blockEditor');