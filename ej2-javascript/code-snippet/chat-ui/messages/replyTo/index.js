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
        text: "Hi Michale, are we on track for the deadline?",
        id: "chat-message-1"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete.",
        id: "chat-message-2"
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today.",
        replyTo: {
            user: michaleUserModel,
            text: 'Yes, the design phase is complete.',
            messageID: 'chat-message-2'
        }
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#replyto');
