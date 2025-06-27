import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        id: 'block-1',
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Undo/Redo Demo'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Try adding new blocks or modifying content below:'
            }
        ]
    },
    {
        id: 'block-3',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: '1. Undo stack set to maximum 40 actions\n2. Press Ctrl+Z to undo\n3. Press Ctrl+Y to redo\n4. Actions include text edits, block moves, additions, deletions'
            }
        ]
    }
];


const blockEditor: BlockEditor = new BlockEditor({
    blocks: blocksData,
    undoRedoStack: 20
});
 
blockEditor.appendTo('#blockeditor_undo');
