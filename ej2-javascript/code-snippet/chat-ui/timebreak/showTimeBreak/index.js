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
        text: "Hi Michale, are we on track for the deadline?",
        timeStamp: new Date("December 25, 2024 7:30")
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete.",
        timeStamp: new Date("December 25, 2024 8:00")
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today.",
        timeStamp: new Date("December 25, 2024 11:00")
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    showTimeBreak: true
});

// Render initialized Chat UI.
chatUI.appendTo('#showTimeBreak');
