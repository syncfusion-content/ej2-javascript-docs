ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};
var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    mentionUsers: [ currentUserModel, michaleUserModel ],
    mentionSelect: function (args) {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#mentionSelect');
