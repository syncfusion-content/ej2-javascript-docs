ej.base.enableRipple(true);

// Initializes the AI Assist control with telemetry enabled
var aiAssistView = new ej.interactivechat.AIAssistView({
    height: '420px',
    width: '550px',
    promptSuggestions: [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?"
    ],
    telemetrySettings: {
        enable: true
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            // Mock telemetry data with hard-coded usage values (model and token details).
            // In a real scenario, these values are obtained from the AI service response.
            var telemetryData = {
                model: 'gpt-4o',
                inputTokens: 128,
                outputTokens: 512,
                reasoningTokens: 64,
                cachedInputTokens: 32,
                customAttributes: { region: 'us-east-1', tenant: 'acme' }
            };
            aiAssistView.addPromptResponse(defaultResponse, true, telemetryData);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#usagedata');
