 const currentUserModel = { id: "user1", user: "Albert" };
 const botUserModel = { id: "user2", user: "Bot", avatarUrl:'https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png' };

// Initialize Syncfusion Chat UI
const chat = new ej.interactivechat.ChatUI({
user: currentUserModel,
messages: [],
messageSend: async function(args) {
    // Add user's message to the UI
    chat.addMessage({ text: args.message.text, author: currentUserModel });

// Call backend API to get Dialogflow response
try {
    const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: args.message.text, sessionId: currentUserModel.id })
    });
    const data = await response.json();
    // Add bot's reply to the UI
    chat.addMessage({ text: data.reply, author: botUserModel });
} catch {
    chat.addMessage({ text: "Sorry, I couldn't contact the server.", author: botUserModel });
}
}
});

// Render the chat component
chat.appendTo('#chat-container');