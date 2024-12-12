import { ChatUI, TypingEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    userTyping: (args: TypingEventArgs) => {
        // Your required action here
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#userTyping');
