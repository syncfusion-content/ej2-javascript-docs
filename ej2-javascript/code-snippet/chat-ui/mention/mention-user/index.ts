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

let customUserModel = {
    id : "custom-user",
    user : "Reena"
}

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
        text: "{0} How about 10 AM?",
        mentionUsers: [michaleUserModel]
    }
];

// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    headerText: "TeamSync Professionals",
    messages: chatMessages,
    mentionUsers: [ currentUserModel, customUserModel ],
    user: currentUserModel
});

// Render initialized Chat UI.
chatUI.appendTo('#mention-user');
