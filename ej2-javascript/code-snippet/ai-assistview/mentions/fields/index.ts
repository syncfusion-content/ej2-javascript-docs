import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Local data source for mention items
let mentionData: { [key: string]: Object }[] = [
    { id: 'TechSupport', name: 'TechSupport' },
    { id: 'HRAssistant', name: 'HRAssistant' },
    { id: 'KnowledgeBase', name: 'KnowledgeBase' }
];

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({
    promptPlaceholder: "Type '@' to mention an agent...",
    mentions: [
        {
            mentionChar: '@',
            dataSource: mentionData,
            fields: { text: 'name', value: 'id' }
        }
    ],
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'The selected mention has been processed. Connect the AIAssistView to your preferred AI service for real-time responses.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#fields');
