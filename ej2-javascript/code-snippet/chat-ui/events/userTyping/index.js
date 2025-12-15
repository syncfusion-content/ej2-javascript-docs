ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    user: currentUserModel,
    userTyping: () => {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#userTyping');
