import { ChatUI, UserModel, MessageModel } from '@syncfusion/ej2-interactive-chat';
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";
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
        items: [ { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' } ]
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#template');

new DropDownButton({
    items: [
        { text: 'Info' },
        { text: 'Search' },
        { text: 'Add to list' },
        { text: 'Mute' }
      ],
      content: 'Menu',
      iconCss: 'e-icons e-menu',
      cssClass: 'custom-dropdown'
}, '#ddMenu');
