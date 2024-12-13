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
let suggestions : string[] = [ "Okay will check it", "Sounds good!"];
let chatMessages: MessageModel = [
    {
        author: currentUserModel,
        text: "Hi Michale, are we on track for the deadline?"
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete."
    }
];
// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    suggestions: suggestions,
    suggestionTemplate: suggestionTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#suggestionTemplate');

function suggestionTemplate(context: any): string {
    return `
        <div class='suggestion-item active'>
            <div class="content">${context.suggestion}</div>
        </div>
    `;
}
