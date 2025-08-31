import { BlockEditor, BuiltInToolbar, ContentType } from '@syncfusion/ej2-blockeditor';

const blockData = [
    {
        id: 'sample-heading',
        type: 'Heading',
        props: { level: 1},
        content: [
            {
                type: ContentType.Text,
                content: 'Formatting Demo'
            }
        ]
    },
    {
        id: 'sample-paragraph-1',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
            }
        ]
    },
    {
        id: 'sample-list',
        type: 'BulletList',
        content: [
            {
                type: ContentType.Text,
                content: 'List item for formatting demonstration'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
const blockEditor: BlockEditor = new BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Apply Bold Formatting
document.getElementById('applyBoldBtn')?.addEventListener('click', () => {
    blockEditor.executeToolbarAction(BuiltInToolbar.Bold);
    displayOutput('Bold formatting applied to selected text');
});

// Apply Color Formatting
document.getElementById('applyColorBtn')?.addEventListener('click', () => {
    blockEditor.executeToolbarAction(BuiltInToolbar.Color, '#ff6b35');
    displayOutput('Orange color (#ff6b35) applied to selected text');
});

// Enable Toolbar Items
document.getElementById('enableToolbarBtn')?.addEventListener('click', () => {
    // Enable specific toolbar items
    blockEditor.enableToolbarItems(['bold', 'italic', 'underline']);
    displayOutput('Toolbar items (bold, italic, underline) have been enabled');
});

// Disable Toolbar Items
document.getElementById('disableToolbarBtn')?.addEventListener('click', () => {
    // Disable specific toolbar items
    blockEditor.disableToolbarItems(['bold', 'italic']);
    displayOutput('Toolbar items (bold, italic) have been disabled');
});

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}