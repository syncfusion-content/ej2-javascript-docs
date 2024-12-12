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
        text: "Want to get coffee tomorrow?"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "Sure! What time?"
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "How about 10 AM?"
    },
    {
        id: "msg4",
        author: michaleUserModel,
        text: "Perfect"
    },
    {
        id: "msg5",
        author: currentUserModel,
        text: "See you!"
    },
    {
        id: "msg6",
        author: michaleUserModel,
        text: "Bye!"
    }
];
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    height: '360px'
});

// Render initialized Chat UI.
chatUI.appendTo('#chat-scroll');

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'scrollToBottom') {
        chatUI.scrollToBottom();
    }
});