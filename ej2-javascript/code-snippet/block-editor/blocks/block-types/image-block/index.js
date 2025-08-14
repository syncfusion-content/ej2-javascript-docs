let blocksData = [
    {
        type: 'Image',
        props: {
            src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
            altText: 'Sample image'
        }
    },
    {
        type: 'Paragraph',
        content: [
            {
                type:  ej.blockeditor.ContentType.Text,
                content: 'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
