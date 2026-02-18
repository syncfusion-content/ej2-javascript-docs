ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};

var michaleUserModel = {
    id: "user2",
    user: "Michale Suyama"
};
var suggestions = [ "Okay will check it", "Sounds good!"];

var chatMessages = [
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
var chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    suggestions: suggestions,
    suggestionTemplate: suggestionTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#suggestionTemplate');

function suggestionTemplate(context) {
    return `
        <div class='suggestion-item active'>
            <div class="content">${context.suggestion}</div>
        </div>
    `;
}
