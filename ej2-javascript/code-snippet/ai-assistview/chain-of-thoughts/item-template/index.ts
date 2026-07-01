import { AIAssistView, AssistThinking, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

AIAssistView.Inject(AssistThinking);

function stageItemTemplate(data: any): string {
    const item = data.item;
    const statusClass: string = item.isStageInProgress ? 'e-stage-inprogress' : 'e-stage-done';
    return `
        <div class="custom-stage-item ${statusClass}">
            <span class="e-icons ${item.dotCss}"></span>
            <div class="custom-stage-content">${item.content}</div>
        </div>
    `;
}

let aiAssistView: AIAssistView = new AIAssistView({
    itemTemplate: stageItemTemplate,
    prompts: [
        {
            prompt: 'Explain photosynthesis.',
            response: 'Photosynthesis converts sunlight into chemical energy stored in glucose.',
            blocks: [
                {
                    blockType: 'thinking',
                    title: 'Reasoning steps',
                    isActive: false,
                    collapsed: true,
                    collapsible: true,
                    stages: [
                        { id: 'step1', status: 'completed', content: 'Recalled definition of photosynthesis.' },
                        { id: 'step2', status: 'completed', content: 'Identified inputs: sunlight, CO₂, water.' },
                        { id: 'step3', status: 'completed', content: 'Identified outputs: glucose, oxygen.' }
                    ]
                }
            ]
        }
    ],
    promptRequest: (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            aiAssistView.addPromptResponse({
                blocks: [],
                response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
            }, true);
        }, 1000);
    }
});

aiAssistView.appendTo('#placeholder');