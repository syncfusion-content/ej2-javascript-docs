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
        text: "Hi there! How's it going?"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "Hey! I'm doing well, thanks. How about you?"
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "Mostly the usual stuff. I did start a new hobby - painting!"
    }
];

// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#default-chat');
