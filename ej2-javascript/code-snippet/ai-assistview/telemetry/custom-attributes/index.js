ej.base.enableRipple(true);

// Initializes the AI Assist control with telemetry enabled and custom attributes attached
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
            // Mock telemetry data with domain-specific custom attributes.
            // Each key in customAttributes becomes its own row in the telemetry tooltip.
            var telemetryData = {
                model: 'gpt-4o',
                inputTokens: 128,
                outputTokens: 512,
                customAttributes: {
                    region: 'us-east-1',
                    tenant: 'acme',
                    sessionId: 'sess-7841',
                    feature: 'goal-coach'
                }
            };
            aiAssistView.addPromptResponse(defaultResponse, true, telemetryData);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#customattributes');