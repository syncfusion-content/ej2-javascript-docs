import { AIAssistView, PromptRequestEventArgs, TelemetryData, TelemetryMetric } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the AI Assist control with telemetry metrics configured
let aiAssistView: AIAssistView = new AIAssistView({
    height: '420px',
    width: '550px',
    promptSuggestions: [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?"
    ],
    telemetrySettings: {
        enable: true,
        // Limits the report to the specified metrics and fixes their display order in the tooltip.
        metrics: ['status', 'duration', 'model', 'inputTokens', 'outputTokens', 'totalTokens'] as TelemetryMetric[]
    },
    promptRequest: (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            // Mock telemetry data with hard-coded usage values.
            let telemetryData: TelemetryData = {
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
