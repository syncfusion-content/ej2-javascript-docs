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
        enable: true,
        // Invoked before every report is delivered. Return the report (modified or not)
        // to deliver it, or null to suppress the report entirely.
        beforeReport: function (report) {
            report.customAttributes = { region: 'us-east-1', tenant: 'acme', beta: true };
            return report;
        }
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#beforereport');
