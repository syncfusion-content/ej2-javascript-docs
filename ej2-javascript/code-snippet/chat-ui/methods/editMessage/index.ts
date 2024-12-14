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
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    height: '360px'
});

// Render initialized Chat UI.
chatUI.appendTo('#edit-message');

document.addEventListener('click', (event) => {
    if (event.target && (event.target as HTMLElement).id === 'updateMessage') {
        chatUI.updateMessage({text: "Hi Michael, are we still on schedule to meet the deadline?", author: currentUserModel},'msg1');
    }
});