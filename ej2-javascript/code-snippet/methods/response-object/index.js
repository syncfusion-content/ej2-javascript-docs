ej.base.enableRipple(true);

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#response-object');

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'addObjectResponse') {
        aiAssistView.addPromptResponse({ prompt: 'What is AI?', response: 'AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.' });
    }
});