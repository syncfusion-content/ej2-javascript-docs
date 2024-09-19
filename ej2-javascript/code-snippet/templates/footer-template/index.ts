import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({
    footerTemplate: footerContent,
});

// Render initialized AI Assist.
aiAssistView.appendTo('#footer-template');

function footerContent() {
    return `<div class="custom-footer">
                <textarea id="promptTextArea" class="e-input" rows="2" placeholder="Enter your prompt here"></textarea>
                <button id="sendPrompt" class="e-btn e-primary">Send</button>
            </div>`;
}

document.addEventListener('click', (event) => {
    if (event.target && (event.target as HTMLElement).id === 'sendPrompt') {
        const textArea = document.getElementById('promptTextArea') as HTMLTextAreaElement;
        if (textArea) {
            textArea.value = '';
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }
    }
});
