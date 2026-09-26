import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Local data source for agent mentions.
const agents: any[] = [
    {
        id: 'TechSupport',
        name: 'TechSupport',
        description: 'Troubleshoot technical issues',
        placeholder: 'Ask about VPN, network, or device issues'
    },
    {
        id: 'HRAssistant',
        name: 'HRAssistant',
        description: 'Get assistance with HR policies',
        placeholder: 'Ask about leave, benefits, and HR policies'
    },
    {
        id: 'KnowledgeBase',
        name: 'KnowledgeBase',
        description: 'Search internal documentation',
        placeholder: 'Search the internal knowledge base'
    }
];

// Local data source for command mentions.
const commands: any[] = [
    {
        id: 'table',
        name: '/table',
        description: 'Answer as a markdown table',
        placeholder: 'Format the response as a table'
    },
    {
        id: 'rewrite',
        name: '/rewrite',
        description: 'Rewrite content for clarity',
        placeholder: 'Improve clarity and professional tone'
    },
    {
        id: 'checklist',
        name: '/checklist',
        description: 'Create a step-by-step checklist',
        placeholder: 'Convert the response into a checklist'
    }
];

const itemTemplate: string =
    '<div class="mention-item">' +
        '<span class="mention-name">${name}</span>' +
        '<span class="mention-description">${description}</span>' +
    '</div>';

// Initializes AI AssistView with custom mention item templates.
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
            itemTemplate: itemTemplate
        },
        {
            mentionChar: '/',
            dataSource: commands,
            fields: {
                text: 'name',
                value: 'id'
            },
            showMentionChar: false,
            itemTemplate: itemTemplate
        }
    ],
    promptRequest: (): void => {
        setTimeout((): void => {
            const defaultResponse: string =
                'The selected mention has been processed. Connect the AI AssistView to your preferred AI service for real-time responses.';

            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Renders the initialized AI AssistView.
aiAssistView.appendTo('#item-template');