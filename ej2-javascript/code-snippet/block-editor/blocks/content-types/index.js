let blocksData = [
    {
        type: 'Heading2',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Different Content Types'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'The Block Editor supports various content types: '
            },
            {
                type: ej.blockeditor.ContentType.Link,
                content: 'hyperlinks',
                linkSettings: {
                    url: 'https://ej2.syncfusion.com/documentation/',
                    openInNewWindow: true
                }
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: ', inline '
            },
            {
                type: ej.blockeditor.ContentType.Code,
                content: 'code snippets.'
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: '\nUser mentions like '
            },
            {
                type: ej.blockeditor.ContentType.Mention,
                id: 'user1'
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: ', and labels such as '
            },
            {
                type: ej.blockeditor.ContentType.Label,
                id: 'label1'
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: '.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
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
