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
        text: "Hi {0}, are we on track for the deadline?",
        mentionUsers: [michaleUserModel]
    },
    {
        author: michaleUserModel,
        text: "Yes {0}, the design phase is complete.",
        mentionUsers: [currentUserModel]
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];

// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    headerText: "TeamSync Professionals",
    messages: chatMessages,
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#mention-chat');
