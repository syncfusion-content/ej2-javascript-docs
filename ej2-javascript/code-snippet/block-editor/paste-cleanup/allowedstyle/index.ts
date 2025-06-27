import { BlockEditor, AfterPasteEventArgs } from '@syncfusion/ej2-blockeditor';

// Initialize BlockEditor with paste cleanup settings
const blockEditor: BlockEditor = new BlockEditor({
    blocks: [
        {
            id: 'demo-block',
            type: 'Paragraph'
        }
    ],
    // Configure paste cleanup settings
    pasteSettings: {
        allowedStyles: ['text-decoration'],
        deniedTags: ['script', 'iframe']
    },
    afterPaste: (args: AfterPasteEventArgs) => {
        displayOutput(`After Paste Event: Processed content length: ${args.content.length} characters`);
    }
});

blockEditor.appendTo('#blockeditor');

displayOutput(`Paste Cleanup Settings Active:
- Allowed Styles: ['text-decoration']
- Denied Tags: ['script', 'iframe']

Copy content from the test area above and paste it into the editor to see the cleanup in action.`);

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}