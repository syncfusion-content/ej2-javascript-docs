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
        text: "Hi {0}, are we on track for the deadline?",
        mentionUsers: [michaleUserModel]
    },
    {
        author: michaleUserModel,
        text: "Yes{0}, the design phase is complete.",
        mentionUsers: [currentUserModel]
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];

// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    headerText: "TeamSync Professionals",
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#mention-chat');
