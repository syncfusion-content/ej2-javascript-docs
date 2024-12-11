import { ChatUI } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({});

// Render initialized Chat UI.
chatUI.appendTo('#chatui');