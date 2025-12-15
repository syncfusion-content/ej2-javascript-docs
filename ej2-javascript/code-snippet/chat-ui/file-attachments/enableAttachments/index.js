ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    user: currentUserModel,
    enableAttachments: true
});

// Render initialized Chat UI.
chatUI.appendTo('#enableAttachments');
