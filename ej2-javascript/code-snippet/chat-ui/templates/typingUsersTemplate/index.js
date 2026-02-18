ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};

var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};
var reenaUserModel = {
    id: "user3",
    user: "Reena"
};
var typingUsers = [michaleUserModel, reenaUserModel];
var chatMessages = [
    {
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete."
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    typingUsers: typingUsers,
    typingUsersTemplate: typingUsersTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#typingUsersTemplate');

function typingUsersTemplate(context) {
    if (!context.users || context.users.length === 0) {
        return '';
    }

    var usersList = context.users.map(function (user, i) {
        var isLastUser = i === context.users.length - 1;
        return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
    }).join(' ');

    return `
        <div class="typing-wrapper">
            ${usersList} are typing...
        </div>
    `;
}
