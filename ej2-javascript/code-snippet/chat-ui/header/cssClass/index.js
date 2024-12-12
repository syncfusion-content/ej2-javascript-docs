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
        id: "msg1",
        author: currentUserModel,
        text: "Hi, thinking of painting this weekend"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "That’s fun! What will you paint?"
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "Maybe landscapes."
    }
];
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    headerToolbar: {
        items: [
            { iconCss: 'e-icons e-user', align: 'Right', cssClass: 'custom-btn' }
        ]
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#toolbar-cssClass');
