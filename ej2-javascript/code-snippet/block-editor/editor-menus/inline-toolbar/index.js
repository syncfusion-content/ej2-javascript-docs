var customToolbarItems = [
    { id: 'clear', iconCss: 'e-icons e-format-painter', item: ej.blockeditor.BuiltInToolbar.Custom, tooltip: 'Format Painter' },
    { id: 'highlight', iconCss: 'e-icons e-highlight', item: ej.blockeditor.BuiltInToolbar.Custom, tooltip: 'Highlight' },
];

// Initialize BlockEditor with custom block action configuration
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            id: 'title-block',
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Inline Toolbar Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Select any text in the editor to open the Inline Toolbar'
                }
            ]
        }
    ],
    inlineToolbar: {
        width: '80px',
        enable: true,
        items: customToolbarItems,
        enableTooltip: true,
        open: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        itemClicked: (args) => {
            // Handle custom actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');