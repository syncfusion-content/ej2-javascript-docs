import { BlockEditor, BuiltInToolbar, ContentType, ToolbarCloseEventArgs, ToolbarItemClickedEventArgs, ToolbarItemModel, ToolbarOpenEventArgs } from '@syncfusion/ej2-blockeditor';

const customToolbarItems: ToolbarItemModel[] = [
    { id: 'clear', iconCss: 'e-icons e-format-painter', item: BuiltInToolbar.Custom, tooltip: 'Format Painter' },
    { id: 'highlight', iconCss: 'e-icons e-highlight', item: BuiltInToolbar.Custom, tooltip: 'Highlight' },
];

// Initialize BlockEditor with custom block action configuration
const blockEditor: BlockEditor = new BlockEditor({
    blocks: [
        {
            id: 'title-block',
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Inline Toolbar Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ContentType.Text,
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
        open: (args: ToolbarOpenEventArgs) => {
            // Your actions here
        },
        close: (args: ToolbarCloseEventArgs) => {
            // Your actions here
        },
        itemClicked: (args: ToolbarItemClickedEventArgs) => {
            // Handle custom actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');