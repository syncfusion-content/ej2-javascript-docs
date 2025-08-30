import { ChatUI, UserModel } from '@syncfusion/ej2-interactive-chat';

// Define interfaces for type safety
interface MessageResponse {
  reply: string;
}
 
// User and bot models
const currentUserModel: UserModel = { id: 'user1', user: 'Albert' };
const botUserModel: UserModel = { id: 'user2', user: 'Bot', avatarUrl:'https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png' };
 
// Initialize Syncfusion Chat UI
const chat: ChatUI = new ChatUI({
  user: currentUserModel,
  headerIconCss: 'Bot',
  messages: [],
  messageSend: async (args:any) => {
    args.cancel=true;
    // Add user's message to the UI
    chat.addMessage({ text: args.message.text, author: currentUserModel });
 
 // Call backend API to get Dialogflow response
    try {
      const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: args.message.text, sessionId: currentUserModel.id }),
      });
      const data: MessageResponse = await response.json();
      // Add bot's reply to the UI
      chat.addMessage({ text: data.reply, author: botUserModel });
    } catch {
      chat.addMessage({ text: "Sorry, I couldn't contact the server.", author: botUserModel });
    }
  },
});
chat.appendTo('#chatUI');