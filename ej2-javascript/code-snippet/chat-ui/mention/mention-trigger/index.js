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
let chatUI = new ej.interactivechat.ChatUI({
    headerText: "TeamSync Professionals",
    messages: chatMessages,
    mentionUsers: [ currentUserModel, michaleUserModel ],
    mentionTriggerChar: '/',
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#mention-trigger');
