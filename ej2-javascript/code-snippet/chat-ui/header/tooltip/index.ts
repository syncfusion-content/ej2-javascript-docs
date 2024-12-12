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
    headerToolbar: {
        items: [
            { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Refresh' }
        ]
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#toolbar-tooltip');
