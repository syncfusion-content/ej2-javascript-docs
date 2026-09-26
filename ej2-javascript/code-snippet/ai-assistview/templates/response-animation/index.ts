import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({
    responseAnimationTemplate: responseAnimationContent,
    promptRequest: (args: PromptRequestEventArgs) => {
        return new Promise<void>((resolve: () => void) => {
            setTimeout(() => {
                let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                aiAssistView.addPromptResponse(defaultResponse);
                resolve();
            }, 2000);
        });
    }
});
aiAssistView.appendTo('#response-animation');

function responseAnimationContent() {
    return `<div class="assistview-loading-status">
                <div class="assistview-grid-icon">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>
                <span class="assistview-loading-label">Generating</span>
            </div>`;
}
