import { ChatUI } from '@syncfusion/ej2-interactive-chat';
const openaiApiKey = '';

let currentUser = {
  id: 'user1',
  user: 'You',
};

let aiModel = {
  id: 'ai',
  user: 'Open AI',
};

let chatUI = new ChatUI({
  user: currentUser,
  headerText: 'Chat with OpenAI',
  headerIconCss: 'e-icons e-ai-chat',
  headerToolbar: {
    items: [
      { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' },
    ],
    itemClicked: toolbarItemClicked,
  },
  emptyChatTemplate: '#emptyChatTemplate',
  messageSend: function (args) {
    setTimeout(async () => {
      chatUI.typingUsers = [aiModel];
      try {
        // --- OpenAI API Call ---
        const response = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [{ role: 'user', content: args.message.text }],
              max_tokens: 150,
            }),
          }
        );
        const data = await response.json();
        const responseText = data.choices[0].message.content.trim() || 'No response received.';
        chatUI.addMessage({
          text: marked.parse(responseText),
          author: aiModel,
        });
      } catch (error) {
        console.error('Error fetching OpenAI response:', error);
        chatUI.addMessage({
          text: 'Error generating response. Please check your API key and try again.',
          author: aiModel,
        });
      } finally {
        chatUI.typingUsers = [];
      }
    }, 500);
  },
});

function toolbarItemClicked() {
  chatUI.messages = [];
}

// Render initialized Chat UI.
chatUI.appendTo('#openai');