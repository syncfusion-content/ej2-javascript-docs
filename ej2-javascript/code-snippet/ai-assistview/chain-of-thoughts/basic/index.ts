import { AIAssistView, AssistThinking } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

AIAssistView.Inject(AssistThinking);

let aiAssistView: AIAssistView = new AIAssistView({
    prompts: [
        {
            prompt: 'Explain the water cycle.',
            response: 'The water cycle describes how water moves continuously through the environment via evaporation, condensation, and precipitation.',
            blocks: [
                {
                    blockType: 'thinking',
                    title: 'Reasoning',
                    collapsed: true,
                    collapsible: true,
                    isActive: false,
                    stages: [
                        { id: 'step1', status: 'completed', content: 'Identified request as a water cycle explanation.' },
                        { id: 'step2', status: 'completed', content: 'Summarized key stages concisely.' },
                        { id: 'step3', status: 'completed', content: 'Composed a clear single-paragraph response.' }
                    ]
                }
            ]
        }
    ],
    promptRequest: () => {
        setTimeout(() => {
            aiAssistView.addPromptResponse({
                blocks: [],
                response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
            }, true);
        }, 1000);
    }
});

aiAssistView.appendTo('#placeholder');