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
        text: "Want to get coffee tomorrow?"
    },
    {
        author: michaleUserModel,
        text: "Sure! What time?"
    },
    {
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
var chatUI = new ej.interactivechat.ChatUI({
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