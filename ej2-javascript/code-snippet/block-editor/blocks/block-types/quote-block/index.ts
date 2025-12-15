import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Quote',
        content: [
            {
                contentType: ContentType.Text,
                content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
