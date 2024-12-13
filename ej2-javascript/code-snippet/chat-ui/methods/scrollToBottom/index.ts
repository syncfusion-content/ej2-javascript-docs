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
        author: currentUserModel,
        text: "Want to get coffee tomorrow?"
    },
    {
        author: michaleUserModel,
        text: "Sure! What time?"
    },
    {
        author: currentUserModel,
        text: "How about 10 AM?"
    },
    {
        id: "msg4",
        author: michaleUserModel,
        text: "Perfect"
    },
    {
        id: "msg5",
        author: currentUserModel,
        text: "See you!"
    },
    {
        id: "msg6",
        author: michaleUserModel,
        text: "Bye!"
    }
];
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    height: '360px'
});

// Render initialized Chat UI.
chatUI.appendTo('#chat-scroll');

document.addEventListener('click', (event) => {
    if (event.target && (event.target as HTMLElement).id === 'scrollToBottom') {
        chatUI.scrollToBottom();
    }
});