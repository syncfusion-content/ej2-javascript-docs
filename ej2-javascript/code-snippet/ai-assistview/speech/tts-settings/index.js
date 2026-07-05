ej.base.enableRipple(true);

// Sample prompt data
var promptsData = [
    {
        prompt: "What is AI?",
        response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making."
    }
];

// Initializes the AI Assist control with textToSpeech settings
var aiAssistView = new ej.interactivechat.AIAssistView({
    prompts: promptsData,
    responseToolbarSettings: {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' }
        ]
    },
    // Configure the built-in Text-to-Speech behaviour
    textToSpeechSettings: {
        language: 'en-US',
        speechPitch: 1,
        speechRate: 1,
        volume: 1,
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#aiAssistView');
