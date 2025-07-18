import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        id: 'security-callout',
        type: 'Callout',
        children: [
            { 
                id: 'security-title',
                parentId: 'security-callout',
                type: 'Heading3',
                content: [{
                    type: ContentType.Text,
                    content: 'Security Notice'
                }]
            },
            { 
                id: 'security-warning',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ContentType.Text,
                    content: 'Always validate user input before processing to prevent security vulnerabilities.'
                }]
            },
            { 
                id: 'security-tips',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ContentType.Text,
                    content: 'Use HTTPS for all data transmission'
                }],
                indent: 1
            },
            { 
                id: 'security-tips-2',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ContentType.Text,
                    content: 'Implement proper authentication mechanisms'
                }],
                indent: 1
            },
            { 
                id: 'security-tips-3',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ContentType.Text,
                    content: 'Regularly update dependencies and libraries'
                }],
                indent: 1
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
