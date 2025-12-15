ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};

// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    attachmentUploadFailure: ()=> {
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
chatUI.appendTo('#upload-failure');
