import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Template',
        template: `<div class="notification-card">
            <div class="notification-header">
                <span class="notification-icon">📢</span>
                <h3 class="notification-title">Important Announcement</h3>
            </div>
            <div class="notification-content">
                <p>The system will be undergoing maintenance on Saturday from 2:00 AM to 4:00 AM.</p>
                <p>Please save your work before this time to prevent any data loss.</p>
            </div>
        </div>`
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
