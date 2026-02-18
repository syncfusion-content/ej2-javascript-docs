ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};

var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

var customUserModel = {
    id : "custom-user",
    user : "Reena"
}

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
        text: "{0} How about 10 AM?",
        mentionUsers: [michaleUserModel]
    }
];

// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    headerText: "TeamSync Professionals",
    messages: chatMessages,
    mentionUsers: [ currentUserModel, customUserModel ],
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#mention-user');
