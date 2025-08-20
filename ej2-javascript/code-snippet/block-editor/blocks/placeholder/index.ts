import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        type: 'Paragraph',
        props: { placeholder: 'Start typing your notes or press "/" for commands...'}
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
