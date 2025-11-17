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
    footerTemplate: "#footerContent"
});

// Render initialized Chat UI.
chatUI.appendTo('#chatui');

// Initialize Speech-to-Text component
var speechToTextObj = new ej.inputs.SpeechToText({
    transcriptChanged: onTranscriptChange,
    onStop: onListeningStop,
    created: onCreated,
    cssClass: 'e-flat'
});
speechToTextObj.appendTo('#speechToText');

// Updates transcript in the input area when speech-to-text transcribes
function onTranscriptChange(args) {
    document.querySelector('#chatui-footer').innerText = args.transcript;
}

// Handles actions when speech listening stops
function onListeningStop() {
    toggleButtons();
}

// Handles actions after component creation
function onCreated() {
    var chatuiFooter = document.querySelector('#chatui-footer');
    var sendButton = document.querySelector('#chatui-sendButton');

    sendButton.addEventListener('click', sendIconClicked);
    chatuiFooter.addEventListener('input', toggleButtons);

    chatuiFooter.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            sendIconClicked();
            e.preventDefault(); // Prevent the default behavior of the Enter key
        }
    });
    toggleButtons();
}

// Toggles the visibility of the send and speech-to-text buttons
function toggleButtons() {
    var chatuiFooter = document.querySelector('#chatui-footer');
    var sendButton = document.querySelector('#chatui-sendButton');
    var speechButton = document.querySelector('#speechToText');

    var hasText = chatuiFooter.innerText.trim() !== '';
    sendButton.classList.toggle('visible', hasText);
    speechButton.classList.toggle('visible', !hasText);

    if (!hasText && (chatuiFooter.innerHTML === '<br>' || !chatuiFooter.innerHTML.trim())) {
        chatuiFooter.innerHTML = '';
    }
}

// Handles send button click event
function sendIconClicked() {
    var editor = document.querySelector('#chatui-footer');
    const messageContent = editor?.innerText || '';
    if (messageContent.trim()) {
        chatUI.addMessage({
        author: currentUserModel,
        text: messageContent,
      });
      editor.innerText = '';
      toggleButtons(); // Update button visibility
    }
}