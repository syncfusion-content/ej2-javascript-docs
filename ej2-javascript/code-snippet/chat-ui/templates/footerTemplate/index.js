ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};

var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};

var chatMessages = [
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
var chatUI = new ej.interactivechat.ChatUI({
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
        var textArea = document.getElementById('chatTextArea');
        if (textArea && textArea.value.length > 0) {
            var value = textArea.value;
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
