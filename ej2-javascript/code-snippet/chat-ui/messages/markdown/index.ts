import { ChatUI, UserModel, MessageModel} from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import marked = require('marked');

// Enable ripple effect
enableRipple(true);

// Define user models
let currentUserModel: UserModel = {
  id: 'user1',
  user: 'Albert',
};

let michaleUserModel: UserModel = {
  id: 'user2',
  user: 'Michale Suyama',
};

const suggestions = [
  {
    displayText: 'Share quick link',
    markdownText:
      'Check out our [project dashboard](https://dashboard.example.com) for updates!',
  },
  {
    displayText: 'Emphasize priority',
    markdownText: 'This is **high priority** and needs _immediate attention_.',
  },
];

// Initialize messages with Markdown parsing
let chatMessages: MessageModel[] = [
  {
    author: currentUserModel,
    text: marked.parse(
      'Hey Michale, did you review the _new API documentation_?'
    ),
    timeStamp: new Date('2024-01-15T09:30:00'),
  },
  {
    author: michaleUserModel,
    text: marked.parse(
      'Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'
    ),
    timeStamp: new Date('2024-01-15T09:32:00'),
  },
];

let chatUI: ChatUI = new ChatUI({
  messages: chatMessages,
  user: currentUserModel,
  headerText: 'Chat UI with Markdown',
  suggestions: suggestions.map((s) => s.displayText),
  messageToolbarSettings: {
  },
  messageSend: (args: { message: { text: string }; cancel?: boolean }) => {
    args.cancel = true;
    const suggestion = suggestions.find(
      (s) => s.displayText === args.message.text
    );
    const messageText = suggestion
      ? suggestion.markdownText
      : args.message.text;
    const newMessage: MessageModel = {
      text: marked.parse(messageText),
      author: currentUserModel,
      timeStamp: new Date(),
    };
    chatMessages.push(newMessage);
    chatUI.messages = chatMessages;
  },
});

chatUI.appendTo('#markdown');
