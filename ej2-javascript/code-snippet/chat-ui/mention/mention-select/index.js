ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};
let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    mentionUsers: [ currentUserModel, michaleUserModel ],
    mentionSelect: (args) => {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#mentionSelect');
