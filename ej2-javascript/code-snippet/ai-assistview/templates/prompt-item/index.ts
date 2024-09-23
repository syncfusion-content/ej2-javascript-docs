import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let promptsData = [
    {
        prompt: "What is AI?",
        response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
];

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({
    prompts: promptsData,
    promptItemTemplate: promptItemContent,
    promptRequest: (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let foundPrompt = promptsData.find((promptObj: any) => promptObj.prompt === args.prompt);
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#prompt-item');

function promptItemContent(ctx: any) {
    let prompt = ctx.prompt.replace('<span class="e-icons e-circle-info"></span>', '');
    return `<div class="promptItemContent">
                <div class="prompt-header">You
                    <span class="e-icons e-user"></span>
                </div>
                <div class="content">${prompt}</div>
            </div>`;
}
