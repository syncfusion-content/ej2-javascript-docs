import { AIAssistView, PromptRequestEventArgs, PromptModel } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let promptsData: PromptModel[] = [
    {
        prompt: "What is AI?",
        response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.",
        regeneratedResponses: [
            "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines programmed to think and learn like humans.",
            "Artificial Intelligence is the development of computer systems capable of performing tasks that typically require human intelligence.",
            "AI is a branch of computer science focused on building machines that can perform tasks requiring human-like intelligence."
        ]
    }
];

let aiAssistView: AIAssistView = new AIAssistView({
    prompts: promptsData,
    responseToolbarSettings: {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
            { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
        ]
    },
    promptRequest: (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            aiAssistView.addPromptResponse('For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.');
        }, 1000);
    }
});

aiAssistView.appendTo('#regenerate-preload');