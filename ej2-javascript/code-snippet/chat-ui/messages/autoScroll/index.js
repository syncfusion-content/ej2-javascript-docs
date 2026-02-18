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
        author: michaleUserModel,
        text: "Perfect"
    },
    {
        author: currentUserModel,
        text: "See you!"
    },
    {
        author: michaleUserModel,
        text: "Bye!"
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    autoScrollToBottom: true
});

// Render initialized Chat UI.
chatUI.appendTo('#autoScroll');
