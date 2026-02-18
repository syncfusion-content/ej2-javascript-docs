ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};

var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

var chatMessages = [
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
        text: "I’ll review it and send feedback by today.",
        status: {
            iconCss: 'e-icons e-chat-seen',
            tooltip: 'Seen'
        }
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#tooltip');
