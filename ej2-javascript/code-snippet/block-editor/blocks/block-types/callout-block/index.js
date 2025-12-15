let blocksData = [
    {
        blockType: 'Callout',
        properties:{
        children: [{
            blockType: 'Paragraph',
            content: [{
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Important information: This is a callout block used to highlight important content.'
            }]
        }]
    }
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
