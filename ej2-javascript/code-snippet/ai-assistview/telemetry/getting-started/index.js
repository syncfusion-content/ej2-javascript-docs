ej.base.enableRipple(true);

// Initializes the AI Assist control with telemetry enabled
var aiAssistView = new ej.interactivechat.AIAssistView({
    height: '420px',
    width: '550px',
    promptSuggestions: [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?",
        "How can I mitigate the threats during product development?"
    ],
    // Enables telemetry reporting for AI interactions
    telemetrySettings: {
        enable: true
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#gettingstarted');
