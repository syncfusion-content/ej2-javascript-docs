import { ChatUI, UserModel } from '@syncfusion/ej2-interactive-chat';
import marked = require('marked');

const azureOpenAIApiKey = 'YOUR_AZURE_OPENAI_API_KEY'; // Replace with your Azure OpenAI API key
const azureOpenAIEndpoint = 'YOUR_AZURE_OPENAI_ENDPOINT'; // Replace with your Azure OpenAI endpoint (e.g., https://your-resource-name.openai.azure.com)
const azureOpenAIApiVersion = '2024-02-01'; // Replace with the API version for your resource
const azureDeploymentName = 'YOUR_DEPLOYMENT_NAME'; // Replace with your Azure OpenAI deployment name

let currentUser: UserModel = {
  id: 'user1',
  user: 'You',
};

let aiModel: UserModel = {
  id: 'ai',
  user: 'Azure OpenAI',
};

let chatUI: ChatUI = new ChatUI({
  user: currentUser,
  headerText: 'Chat with Azure OpenAI',
  headerIconCss: 'e-icons e-ai-chat',
  headerToolbar: {
    items: [
      { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' },
    ],
    itemClicked: toolbarItemClicked,
  },
  emptyChatTemplate: '#emptyChatTemplate',

  messageSend: async function (args) {
    chatUI.typingUsers = [aiModel];

    try {
      const url =
        azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(
          azureDeploymentName
        )}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': azureOpenAIApiKey,
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: args.message.text }],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Azure OpenAI API error: ${response.status} - ${
            errorData.message || JSON.stringify(errorData) || 'Unknown error'
          }`
        );
      }

      const data = await response.json();
      const responseText: string =
        data.choices[0].message.content.trim() || 'No response received.';

      chatUI.addMessage({
        text: marked.parse(responseText),
        author: aiModel,
      });
    } catch (error: any) {
      chatUI.addMessage({
        text: `Please check your Azure OpenAI configuration (API Key, Endpoint, Deployment Name, and API Version) and try again.`,
        author: aiModel,
      });
    } finally {
      chatUI.typingUsers = [];
    }
  },
});

function toolbarItemClicked() {
  chatUI.messages = [];
}

chatUI.appendTo('#openai');
