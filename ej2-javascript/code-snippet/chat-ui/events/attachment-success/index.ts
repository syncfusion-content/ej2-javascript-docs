import { ChatUI, UserModel } from '@syncfusion/ej2-interactive-chat';
import { SuccessEventArgs} from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let currentUserModel: UserModel = {
    id: "user1",
    user: "Albert"
};
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    attachmentUploadSuccess: function(args: SuccessEventArgs) {
        // Your required action here
    },
    user: currentUserModel,
    enableAttachments: true,
    attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#upload-success');