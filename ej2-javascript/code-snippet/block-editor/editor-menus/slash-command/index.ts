import { BlockEditor, BlockType, ContentType } from '@syncfusion/ej2-blockeditor';
import { BlockModel, CommandItemModel, CommandMenuOpenEventArgs, CommandMenuCloseEventArgs, CommandQueryFilteringEventArgs, CommandItemClickedEventArgs } from '@syncfusion/ej2-blockeditor';

// Initialize BlockEditor with custom slash command configuration
const blockEditor: BlockEditor = new BlockEditor({
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
                type: BlockType.Divider,
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
        itemClicked: (args: CommandItemClickedEventArgs) => {
            // Handle custom command actions
        },
        open: (args: CommandMenuOpenEventArgs) => {
            // Your actions here
        },
        close: (args: CommandMenuCloseEventArgs) => {
            // Your actions here
        },
        queryFiltering: (args: CommandQueryFilteringEventArgs) => {
            // Your actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');