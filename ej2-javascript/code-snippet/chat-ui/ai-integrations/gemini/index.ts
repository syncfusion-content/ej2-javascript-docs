import { ChatUI, UserModel } from '@syncfusion/ej2-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import marked = require('marked');

// Replace with your Gemini API key
const geminiApiKey: string = '';
const genAI = new GoogleGenerativeAI(geminiApiKey);

let currentUser: UserModel = {
  id: 'user1',
  user: 'You',
};

let aiModel: UserModel = {
  id: 'ai',
  user: 'Gemini',
};

// Initializes the Chat UI control
let chatUI: ChatUI = new ChatUI({
  user: currentUser,
  headerText: 'Chat UI',
  headerIconCss: 'e-icons e-ai-chat',
  headerToolbar: {
    items: [
      { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' },
    ],
    itemClicked: toolbarItemClicked,
  },
  emptyChatTemplate: '#emptyChatTemplate',
  messageSend: function (args) {
    // The user's message is about to be sent and will be added after this event
    setTimeout(async () => {
      // Show typing indicator for AI
      chatUI.typingUsers = [aiModel];

      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); //Replace Your Model Name Here
        const result = await model.generateContent(args.message.text);
        const response = result.response.text();

        // Add AI response
        chatUI.addMessage({
          text: marked.parse(response),
          author: aiModel,
        });
      } catch (error) {
        chatUI.addMessage({
          text: 'Error generating response. Please try again.',
          author: aiModel,
        });
      } finally {
        // Hide typing indicator
        chatUI.typingUsers = [];
      }
    }, 500);
  },
});
function toolbarItemClicked() {
  chatUI.messages = [];
}

// Render initialized Chat UI.
chatUI.appendTo('#gemini');
