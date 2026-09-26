import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Local data source for agent mentions.
const agents: any[] = [
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
const commands: any[] = [
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

// Initializes AI AssistView with custom no-records templates.
const aiAssistView: AIAssistView = new AIAssistView({
    promptPlaceholder: "Type '@' for agents or '/' for commands...",
    mentions: [
        {
            mentionChar: '@',
            dataSource: agents,
            fields: {
                text: 'name',
                value: 'id'
            },
            noRecordsTemplate:
                'No matching agents found. Try a different search.'
        },
        {
            mentionChar: '/',
            dataSource: commands,
            fields: {
                text: 'name',
                value: 'id'
            },
            showMentionChar: false,
            noRecordsTemplate:
                'No matching commands found. Try a different search.'
        }
    ],
    promptRequest: (): void => {
        window.setTimeout((): void => {
            const defaultResponse: string =
                'The selected mention has been processed. Connect the AI AssistView to your preferred AI service for real-time responses.';

            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Renders the initialized AI AssistView.
aiAssistView.appendTo('#no-records-template');