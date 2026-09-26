ej.base.enableRipple(true);

// Local data source for mention items
var mentionData = [
    { id: 'TechSupport', name: 'TechSupport' },
    { id: 'HRAssistant', name: 'HRAssistant' },
    { id: 'KnowledgeBase', name: 'KnowledgeBase' }
];

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    promptPlaceholder: "Type '@' to mention an agent...",
    mentions: [
        {
            mentionChar: '@',
            dataSource: mentionData,
            fields: { text: 'name', value: 'id' }
        }
    ],
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'The selected mention has been processed. Connect the AIAssistView to your preferred AI service for real-time responses.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#fields');
