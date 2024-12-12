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
    height: '360px'
});

// Render initialized Chat UI.
chatUI.appendTo('#message');

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'addString') {
        chatUI.addMessage('Do you have a specific place in mind?');
    }
});