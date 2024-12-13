ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

let chatMessages = [];
for (let i = 1; i <= 150; i++) {
    chatMessages.push({
        text: i % 2 === 0 
            ? `Message ${i} from Michale` 
            : `Message ${i} from Albert`,
        author: i % 2 === 0 ? michaleUserModel : currentUserModel
    });
}
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    loadOnDemand: true
});

// Render initialized Chat UI.
chatUI.appendTo('#loadOnDemand');
