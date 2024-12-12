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
let chatMessages: MessageModel = [
    {
        id: "msg1",
        author: currentUserModel,
        text: "Hi, thinking of painting this weekend"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "That’s fun! What will you paint?"
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "Maybe landscapes."
    }
];
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    height: '360px'
});

// Render initialized Chat UI.
chatUI.appendTo('#message');

document.addEventListener('click', (event) => {
    if (event.target && (event.target as HTMLElement).id === 'addString') {
        chatUI.addMessage('Do you have a specific place in mind?');
    }
});