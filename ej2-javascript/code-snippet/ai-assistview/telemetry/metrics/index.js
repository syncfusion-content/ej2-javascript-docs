ej.base.enableRipple(true);

// Initializes the AI Assist control with telemetry metrics configured
var aiAssistView = new ej.interactivechat.AIAssistView({
    height: '420px',
    width: '550px',
    promptSuggestions: [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?"
    ],
    telemetrySettings: {
        enable: true,
        // Limits the report to the specified metrics and fixes their display order in the tooltip.
        metrics: ['status', 'duration', 'model', 'inputTokens', 'outputTokens', 'totalTokens']
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            // Mock telemetry data with hard-coded usage values.
            var telemetryData = {
                model: 'gpt-4o',
                inputTokens: 128,
                outputTokens: 512
            };
            aiAssistView.addPromptResponse(defaultResponse, true, telemetryData);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#metrics');
