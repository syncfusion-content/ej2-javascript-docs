import { ChatUI, MentionSelectEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
let currentUserModel = {
    id: "user1",
    user: "Albert"
};
let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    mentionUsers: [ currentUserModel, michaleUserModel ],
    mentionSelect: (args: MentionSelectEventArgs) => {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#mentionSelect');
