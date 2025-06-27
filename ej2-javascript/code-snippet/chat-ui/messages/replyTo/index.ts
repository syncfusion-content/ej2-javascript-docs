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
let chatMessages: MessageModel[] = [
    {
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?",
        id: "chat-message-1"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete.",
        id: "chat-message-2"
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today.",
        replyTo: {
            user: michaleUserModel,
            text: 'Yes, the design phase is complete.',
            messageID: 'chat-message-2'
        }
    }
];
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#replyto');
