ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert",
    statusIconCss: 'e-icons e-user-online'
};

let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama",
    statusIconCss: 'e-icons e-user-away'
};

let chatMessages = [
    {
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete."
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#statusicon');
