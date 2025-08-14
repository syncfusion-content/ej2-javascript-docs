// Initialize BlockEditor with custom block action configuration
const blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            id: 'title-block',
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Block Action Menu Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Hover over any block and click the drag handle icon to see custom actions.'
                }
            ]
        }
    ],

    // Block Action Menu Configuration
    blockActionsMenu: {
        enable: true,
        popupWidth: '180px',
        popupHeight: '110px',
        enableTooltip: false,
        // Custom action items
        items: [
            {
                id: 'highlight-action',
                label: 'Highlight Block',
                iconCss: 'e-icons e-highlight',
                tooltip: 'Highlight this block'
            },
            {
                id: 'copy-content-action',
                label: 'Copy Content',
                iconCss: 'e-icons e-copy',
                tooltip: 'Copy block content to clipboard'
            },
            {
                id: 'block-info-action',
                label: 'Block Info',
                tooltip: 'Show block information'
            }
        ],
        open: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        itemClick: (args) => {
            // Handle custom block actions
        }
    }
});

blockEditor.appendTo('#blockeditor');