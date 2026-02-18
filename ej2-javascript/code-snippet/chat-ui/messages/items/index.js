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
        text: "I’ll review it and send feedback by today."
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    messageToolbarSettings: {
        items: [
            { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
            { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
            { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
            { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
        ]
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#items');
