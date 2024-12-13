ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};
let reenaUserModel = {
    id: "user3",
    user: "Reena"
};
let typingUsers = [michaleUserModel, reenaUserModel];
let chatMessages = [
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
let chatUI = new ej.interactivechat.ChatUI({
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

    let usersList = context.users.map((user, i) => {
        let isLastUser = i === context.users.length - 1;
        return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
    }).join(' ');

    return `
        <div class="typing-wrapper">
            ${usersList} are typing...
        </div>
    `;
}
