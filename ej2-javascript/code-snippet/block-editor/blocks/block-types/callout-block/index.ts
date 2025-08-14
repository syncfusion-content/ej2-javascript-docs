import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Callout',
        props:{
        children: [{ 
            id: 'callout-content',
            type: 'Paragraph',
            content: [{
                id: 'callout-content-1',
                type: ContentType.Text,
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
