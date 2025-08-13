
ej.base.enableRipple(true);

var currentUserModel = {
  id: 'user1',
  user: 'Albert'
};
var michaleUserModel = {
  id: 'user2',
  user: 'Michale Suyama'
};

var suggestions = [
  {
    displayText: 'Share quick link',
    markdownText: 'Check out our [project dashboard](https://dashboard.example.com) for updates!',
  },
  {
    displayText: 'Emphasize priority',
    markdownText: 'This is **high priority** and needs _immediate attention_.',
  }
];

var chatMessages = [
  {
    author: currentUserModel,
    text: marked.parse('Hey Michale, did you review the _new API documentation_?'),
    timeStamp: new Date('2024-01-15T09:30:00')
  },
  {
    author: michaleUserModel,
    text: marked.parse('Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'),
    timeStamp: new Date('2024-01-15T09:32:00')
  }
];

var chatUI = new ej.interactivechat.ChatUI({
  messages: chatMessages,
  user: currentUserModel,
  headerText: 'Chat UI with Markdown',
  suggestions: suggestions.map(function(s) { return s.displayText; }),
  messageSend: function(args) {
    args.cancel = true;
    var suggestion = suggestions.find(function(s) { return s.displayText === args.message.text; });
    var messageText = suggestion ? suggestion.markdownText : args.message.text;

    var newMessage = {
      text: DOMPurify.sanitize(marked.parse(messageText)),
      author: currentUserModel,
      timeStamp: new Date()
    };
    chatMessages.push(newMessage);
    chatUI.messages = chatMessages;
  }
});

chatUI.appendTo('#markdown');