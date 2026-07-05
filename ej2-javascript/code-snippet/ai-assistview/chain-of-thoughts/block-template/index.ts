import { AIAssistView, AssistThinking, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

AIAssistView.Inject(AssistThinking);

function blockTemplate(data: any): string {
    const block = data.block;
    const stagesHtml: string = (block.stages || [])
        .map((s: any) => `<li>${s.content}</li>`)
        .join('');
    return `
        <div class="custom-thinking-block">
            <div class="custom-thinking-title">
                <span class="e-icons ${block.isActive ? 'e-spinner' : 'e-check'}"></span>
                <strong>${block.title || 'Thinking'}</strong>
            </div>
            <ul class="custom-thinking-stages">${stagesHtml}</ul>
        </div>
    `;
}

let aiAssistView: AIAssistView = new AIAssistView({
    blockTemplate: blockTemplate,
    prompts: [
        {
            prompt: 'What is the capital of France?',
            response: 'The capital of France is Paris.',
            blocks: [
                {
                    blockType: 'thinking',
                    title: 'Fact lookup',
                    isActive: false,
                    collapsed: false,
                    collapsible: false,
                    stages: [
                        { id: 'step1', status: 'completed', content: 'Checked knowledge base for European capitals.' }
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