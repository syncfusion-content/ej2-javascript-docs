import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Local data source for agent mentions.
const agents: any[] = [
    {
        id: 'TechSupport',
        name: 'TechSupport',
        placeholder: 'Ask about VPN, network, or device issues',
        iconCss: 'e-icons e-comment-status'
    },
    {
        id: 'HRAssistant',
        name: 'HRAssistant',
        placeholder: 'Ask about leave, benefits, and HR policies',
        iconCss: 'e-icons e-people'
    },
    {
        id: 'KnowledgeBase',
        name: 'KnowledgeBase',
        placeholder: 'Search the internal knowledge base',
        iconCss: 'e-icons e-objects'
    }
];

// Local data source for command mentions.
const commands: any[] = [
    {
        id: 'table',
        name: '/table',
        description: 'Answer as a markdown table',
        placeholder: 'Format the response as a table',
        iconCss: 'e-icons e-table'
    },
    {
        id: 'rewrite',
        name: '/rewrite',
        description: 'Rewrite content for clarity and professionalism',
        placeholder: 'Improve clarity and professional tone',
        iconCss: 'e-icons e-rename'
    },
    {
        id: 'checklist',
        name: '/checklist',
        description: 'Convert a process into a step-by-step checklist',
        placeholder: 'Convert the response into a checklist',
        iconCss: 'e-icons e-list-unordered'
    }
];

// Initializes AI AssistView with agent and command mention triggers.
const aiAssistView: AIAssistView = new AIAssistView({
    promptPlaceholder: "Type '@' for agents or '/' for commands...",
    mentions: [
        {
            mentionChar: '@',
            dataSource: agents,
            fields: {
                text: 'name',
                value: 'id',
                iconCss: 'iconCss'
            }
        },
        {
            mentionChar: '/',
            dataSource: commands,
            showMentionChar: false,
            fields: {
                text: 'name',
                value: 'id',
                iconCss: 'iconCss'
            },
            itemTemplate:
                '<div class="listItems">' +
                    '<span class="commandIcon ${iconCss}"></span>' +
                    '<span class="commandName">${name}</span>' +
                    '<span class="commandDesc">${description}</span>' +
                '</div>'
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
aiAssistView.appendTo('#mention-char');