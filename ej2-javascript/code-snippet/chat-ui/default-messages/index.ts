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
        text: "Want to get coffee tomorrow?"
    },
    {
        id: "msg2",
        author: michaleUserModel,
        text: "Sure! What time?"
    },
    {
        id: "msg3",
        author: currentUserModel,
        text: "How about 10 AM?"
    }
];

// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#default-chat');
