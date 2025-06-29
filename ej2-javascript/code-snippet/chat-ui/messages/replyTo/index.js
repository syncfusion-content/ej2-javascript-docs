ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

let chatMessages = [
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
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#replyto');
