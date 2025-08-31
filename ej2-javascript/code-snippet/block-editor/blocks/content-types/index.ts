import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Heading',
        props: {level : 2},
        content: [
            {
                type: ContentType.Text,
                content: 'Different Content Types'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'The Block Editor supports various content types: '
            },
            {
                type: ContentType.Link,
                content: 'hyperlinks',
                props: {
                    url: 'https://ej2.syncfusion.com/documentation/',
                    openInNewWindow: true
                }
            },
            {
                type: ContentType.Text,
                content: ', inline '
            },
            {
                type: ContentType.Code,
                content: 'code snippets.'
            },
            {
                type: ContentType.Text,
                content: '\nUser mentions like'
            },
            {
                type: ContentType.Mention,
                id: 'user1'
            },
            {
                type: ContentType.Text,
                content: ', and labels such as'
            },
            {
                type: ContentType.Label,
                props: {lableId: 'label1'}
            },
            {
                type: ContentType.Text,
                content: '.'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    users: [
        { id: 'user1', user: 'John Doe' }
    ],
    labelSettings: {
        labelItems: [
            { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
        ]
    },
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
