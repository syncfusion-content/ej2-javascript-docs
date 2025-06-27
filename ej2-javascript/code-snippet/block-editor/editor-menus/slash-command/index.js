// Initialize BlockEditor with custom slash command configuration
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            id: 'demo-block',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
    ],
    // Slash Command Menu Configuration
    commandMenu: {
        popupWidth: '350px',
        popupHeight: '400px',
        enableTooltip: false,
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: 'Divider',
                groupHeader: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupHeader: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemClicked: (args) => {
            // Handle custom command actions
        },
        open: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        queryFiltering: (args) => {
            // Your actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');