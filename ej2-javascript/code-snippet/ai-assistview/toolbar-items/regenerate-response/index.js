ej.base.enableRipple(true);

// Sample prompt data
var promptsData = [
    {
        prompt: "What is AI?",
        response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making."
    }
];

var regenerateResponses = [
    "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines programmed to think and learn like humans.",
    "Artificial Intelligence is the development of computer systems capable of performing tasks that typically require human intelligence.",
    "AI is a branch of computer science focused on building machines that can perform tasks requiring human-like intelligence."
];

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    prompts: promptsData,
    responseToolbarSettings: {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
            { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
        ]
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var isRegenerate = promptsData.some(function (p) { return p.prompt === args.prompt; });
            var response = isRegenerate
                ? regenerateResponses[Math.floor(Math.random() * regenerateResponses.length)]
                : 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
            aiAssistView.addPromptResponse(response);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#regenerate-response');
