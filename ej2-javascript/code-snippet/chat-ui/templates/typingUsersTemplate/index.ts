import { ChatUI, UserModel, MessageModel } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let currentUserModel: UserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel: UserModel = {
    id: "user2",
    user: "Michale Suyama"
};
let reenaUserModel: UserModel = {
    id: "user3",
    user: "Reena"
};
let typingUsers : UserModel[] = [michaleUserModel, reenaUserModel];
let chatMessages: MessageModel[] = [
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
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    typingUsers: typingUsers,
    typingUsersTemplate: typingUsersTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#typingUsersTemplate');

function typingUsersTemplate(context: any): string {
    if (!context.users || context.users.length === 0) {
        return '';
    }

    const usersList = context.users.map((user: any, i: number) => {
        const isLastUser: boolean = i === context.users.length - 1;
        return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
    }).join(' ');

    return `
        <div class="typing-wrapper">
            ${usersList} are typing...
        </div>
    `;
}
