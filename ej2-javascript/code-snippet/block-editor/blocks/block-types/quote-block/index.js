let blocksData = [
    {
        type: 'Quote',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
