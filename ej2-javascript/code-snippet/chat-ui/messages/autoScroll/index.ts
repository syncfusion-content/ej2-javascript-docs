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
        author: michaleUserModel,
        text: "Perfect"
    },
    {
        author: currentUserModel,
        text: "See you!"
    },
    {
        author: michaleUserModel,
        text: "Bye!"
    }
];
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    autoScrollToBottom: true
});

// Render initialized Chat UI.
chatUI.appendTo('#autoScroll');
