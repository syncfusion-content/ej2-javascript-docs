ej.base.enableRipple(true);


// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    footerTemplate: footerContent,
});

// Render initialized AI Assist.
aiAssistView.appendTo('#footer-template');

function footerContent() {
    return `<div class="custom-footer">
                <textarea id="promptTextArea" class="e-input" rows="2" placeholder="Enter your prompt here"></textarea>
                <button id="sendPrompt" class="e-btn e-primary">Generate</button>
            </div>`;
}

document.getElementById('reset').addEventListener('click', function () {
    textArea.value = '';
});

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'sendPrompt') {
        const textArea = document.getElementById('promptTextArea');
        if (textArea) {
            textArea.value = '';
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }
    }
});