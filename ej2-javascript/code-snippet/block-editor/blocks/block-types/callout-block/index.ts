import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Callout',
        properties:{
        children: [{
            blockType: 'Paragraph',
            content: [{
                contentType: ContentType.Text,
                content: 'Important information: This is a callout block used to highlight important content.'
            }]
        }]
    }
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
