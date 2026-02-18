var customContextMenuItems = [
    {
        id: 'format-menu',
        text: 'Format',
        iconCss: 'e-icons e-format-painter',
        items: [
            {
                id: 'bold-item',
                text: 'Bold',
                iconCss: 'e-icons e-bold',
            },
            {
                id: 'italic-item',
                text: 'Italic',
                iconCss: 'e-icons e-italic',
            },
            {
                id: 'underline-item',
                text: 'Underline',
                iconCss: 'e-icons e-underline',
            }
        ]
    },
    { separator: true },
    {
        id: 'statistics-item',
        text: 'Block Statistics',
        iconCss: 'e-icons e-chart'
    },
    {
        id: 'export-item',
        text: 'Export Options',
        iconCss: 'e-icons e-export',
        items: [
            {
                id: 'export-json',
                text: 'Export as JSON',
                iconCss: 'e-icons e-file-json'
            },
            {
                id: 'export-html',
                text: 'Export as HTML',
                iconCss: 'e-icons e-file-html'
            },
            {
                id: 'export-pdf',
                text: 'Export as PDF',
                iconCss: 'e-icons e-file-pdf'
            }
        ]
    }
];

// Initialize BlockEditor with custom block action configuration
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            blockType: 'Heading',
            props: { level: 1},
            content: [
                {
                    contentType: ej.blockeditor.ContentType.Text,
                    content: 'Context Menu Demo'
                }
            ]
        },
        {
            blockType: 'Quote',
            content: [
                {
                    contentType: ej.blockeditor.ContentType.Text,
                    content: 'Right-click anywhere in this editor to open the custom context menu. Try different areas and blocks.'
                }
            ]
        }
    ],
    contextMenuSettings: {
        enable: true,
        showItemOnClick: true,
        items: customContextMenuItems,
        opening: function(args) {
            // Your actions here
        },
        closing: function(args) {
            // Your actions here
        },
        itemSelect: function(args) {
            // Handle custom actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');