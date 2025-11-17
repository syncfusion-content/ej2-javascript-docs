import { ChatUI, UserModel, MessageModel } from '@syncfusion/ej2-interactive-chat';
import { SpeechToText, TranscriptChangedEventArgs } from '@syncfusion/ej2-inputs';

let currentUserModel: UserModel = {
    id: "user1",
    user: "Albert"
};

let michaleUserModel: UserModel = {
    id: "user2",
    user: "Michale Suyama"
};
let chatMessages: MessageModel[] = [
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
    footerTemplate: "#footerContent"
});

// Render initialized Chat UI.
chatUI.appendTo('#chatui');

// Initialize Speech-to-Text component
let speechToTextObj: SpeechToText = new SpeechToText({
    transcriptChanged: onTranscriptChange,
    onStop: onListeningStop,
    created: onCreated,
    cssClass: 'e-flat',
});
speechToTextObj.appendTo('#speechToText');

// Handles actions when speech listening stops
function onListeningStop() {
    toggleButtons();
}

function onTranscriptChange(args: TranscriptChangedEventArgs): void {
    (document.querySelector('#chatui-footer') as HTMLElement).innerText = args.transcript;
}

// Handles actions after component creation
function onCreated(): void {
    let chatuiFooter = document.querySelector('#chatui-footer') as HTMLElement;
    let sendButton = document.querySelector('#chatui-sendButton') as HTMLElement;

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
function toggleButtons(): void {
    let chatuiFooter = document.querySelector('#chatui-footer') as HTMLElement;
    let sendButton = document.querySelector('#chatui-sendButton') as HTMLElement;
    let speechButton = document.querySelector('#speechToText') as HTMLElement;

    let hasText = chatuiFooter.innerText.trim() !== '';
    sendButton.classList.toggle('visible', hasText);
    speechButton.classList.toggle('visible', !hasText);

    if (!hasText && (chatuiFooter.innerHTML === '<br>' || !chatuiFooter.innerHTML.trim())) {
        chatuiFooter.innerHTML = '';
    }
}

// Handles send button click event
function sendIconClicked(): void {
    var editor = document.querySelector('#chatui-footer') as HTMLElement;
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