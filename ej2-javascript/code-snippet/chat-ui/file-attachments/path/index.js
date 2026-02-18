ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    user: currentUserModel,
    enableAttachments: true,
    attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        path: 'D:/CustomPathLocation'
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#path');
