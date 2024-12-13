ej.base.enableRipple(true);

let currentUserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

let chatMessages = [
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
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    footerTemplate: footerTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#footerTemplate');

function footerTemplate() {
    return `
        <div class="custom-footer">
            <input id="chatTextArea" class="e-input" placeholder="Type your message..."></input>
            <button id="sendMessage" class="e-btn e-primary e-icons e-send-1"></button>
        </div>`;
}
document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'sendMessage') {
        const textArea = document.getElementById('chatTextArea');
        if (textArea) {
            let value = textArea.value;
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
