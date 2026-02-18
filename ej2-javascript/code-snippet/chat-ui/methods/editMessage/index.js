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
        id: "msg1",
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "Yes, the design phase is complete."
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    height: '360px'
});

// Render initialized Chat UI.
chatUI.appendTo('#edit-message');

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'updateMessage') {
        chatUI.updateMessage({text: "Hi Michael, are we still on schedule to meet the deadline?", author: currentUserModel},'msg1');
    }
});