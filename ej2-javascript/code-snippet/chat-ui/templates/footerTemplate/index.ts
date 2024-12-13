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
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete."
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today."
    }
];
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    footerTemplate: footerTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#footerTemplate');

function footerTemplate(): string {
    return `
        <div class="custom-footer">
            <input id="chatTextArea" class="e-input" placeholder="Type your message..."></input>
            <button id="sendMessage" class="e-btn e-primary e-icons e-send-1"></button>
        </div>`;
}

document.addEventListener('click', (event) => {
    if (event.target && (event.target as HTMLElement).id === 'sendMessage') {
        const textArea = document.getElementById('chatTextArea') as HTMLTextAreaElement;
        if (textArea) {
            let value: string = textArea.value;
            textArea.value = '';
            chatUI.addMessage(
                {
                    author: michaleUserModel,
                    text: value
                }
            );
        }
    }
});
