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
    user: currentUserModel,
    headerToolbar: {
        items: [
            { iconCss: 'e-icons e-refresh', align: 'Right', disabled: true },
            { iconCss: 'e-icons e-user', align: 'Right' }
        ]
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#toolbar-disable');
