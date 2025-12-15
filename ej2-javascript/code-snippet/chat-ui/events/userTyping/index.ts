import { ChatUI, TypingEventArgs, UserModel } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let currentUserModel: UserModel = {
    id: "user1",
    user: "Albert"
};
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    user: currentUserModel,
    userTyping: (args: TypingEventArgs) => {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#userTyping');
