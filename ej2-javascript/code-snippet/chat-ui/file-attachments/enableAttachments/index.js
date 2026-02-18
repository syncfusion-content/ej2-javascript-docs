ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    user: currentUserModel,
    enableAttachments: true
});

// Render initialized Chat UI.
chatUI.appendTo('#enableAttachments');
