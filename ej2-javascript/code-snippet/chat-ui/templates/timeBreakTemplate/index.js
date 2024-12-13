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
        text: "Hi Michale, are we on track for the deadline?",
        timeStamp: new Date("December 25, 2024 7:30")
    },
    {
        author: michaleUserModel,
        text: "Yes, the design phase is complete.",
        timeStamp: new Date("December 25, 2024 8:00")
    },
    {
        author: currentUserModel,
        text: "I’ll review it and send feedback by today.",
        timeStamp: new Date("December 25, 2024 11:00")
    }
];
// Initializes the Chat UI control
let chatUI = new ej.interactivechat.ChatUI({
    messages: chatMessages,
    user: currentUserModel,
    showTimeBreak: true,
    timeBreakTemplate: timeBreakTemplate
});

// Render initialized Chat UI.
chatUI.appendTo('#timeBreakTemplate');

function timeBreakTemplate(context) {
    var date = new Date(context.messageDate);
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    var formattedDate = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
    return `<div class="timebreak-wrapper">${formattedDate}</div>`;
}
