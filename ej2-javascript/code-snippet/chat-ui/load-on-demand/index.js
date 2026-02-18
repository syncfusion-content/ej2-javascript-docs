ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};

var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

var chatMessages = [];
for (var i = 1; i <= 150; i++) {
    chatMessages.push({
        text: i % 2 === 0 
            ? `Message ${i} from Michale` 
            : `Message ${i} from Albert`,
        author: i % 2 === 0 ? michaleUserModel : currentUserModel
    });
}
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    loadOnDemand: true
});

// Render initialized Chat UI.
chatUI.appendTo('#loadOnDemand');
