ej.base.enableRipple(true);

// Local data source for agent mentions.
var agents = [
    {
        id: 'TechSupport',
        name: 'TechSupport',
        placeholder: 'Ask about VPN, network, or device issues'
    },
    {
        id: 'HRAssistant',
        name: 'HRAssistant',
        placeholder: 'Ask about leave, benefits, and HR policies'
    },
    {
        id: 'KnowledgeBase',
        name: 'KnowledgeBase',
        placeholder: 'Search the internal knowledge base'
    }
];

// Local data source for command mentions.
var commands = [
    {
        id: 'table',
        name: '/table',
        placeholder: 'Format the response as a table'
    },
    {
        id: 'rewrite',
        name: '/rewrite',
        placeholder: 'Improve clarity and professional tone'
    },
    {
        id: 'checklist',
        name: '/checklist',
        placeholder: 'Convert the response into a checklist'
    }
];

// Initializes AI AssistView with StartsWith mention filtering.
var aiAssistView = new ej.interactivechat.AIAssistView({
    promptPlaceholder: "Type '@' for agents or '/' for commands...",
    mentions: [
        {
            mentionChar: '@',
            dataSource: agents,
            fields: {
                text: 'name',
                value: 'id'
            },
            filterType: 'StartsWith'
        },
        {
            mentionChar: '/',
            dataSource: commands,
            fields: {
                text: 'name',
                value: 'id'
            },
            showMentionChar: false,
            filterType: 'StartsWith'
        }
    ],
    promptRequest: function () {
        window.setTimeout(function () {
            var defaultResponse =
                'The selected mention has been processed. Connect the AI AssistView to your preferred AI service for real-time responses.';

            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Renders the initialized AI AssistView.
aiAssistView.appendTo('#filter-type');