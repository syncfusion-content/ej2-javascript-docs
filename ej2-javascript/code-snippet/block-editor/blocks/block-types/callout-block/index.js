let blocksData = [
    {
        type: 'Callout',
        children: [{ 
            id: 'callout-content',
            type: 'Paragraph',
            content: [{
                id: 'callout-content-1',
                type: ej.blockeditor.ContentType.Text,
                content: 'Important information: This is a callout block used to highlight important content.'
            }]
        }]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
