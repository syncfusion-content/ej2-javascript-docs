import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'CollapsibleHeading',
        content: [
            {
                type: ContentType.Text,
                content: 'Collapsible Section'
            }
        ],
        props:{
        level: 1,
        isExpanded: true,
        children: [
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'This content is inside a toggle section and can be collapsed.'
                    }
                ]
            }
        ]
    }
    },
    {
        type: 'CollapsibleParagraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Toggle paragraph section'
            }
        ],
        props:{
        isExpanded: false,
        children: [
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'This content is initially hidden because isExpanded is set to false.'
                    }
                ]
            }
        ]
    }
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
