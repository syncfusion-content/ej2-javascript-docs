ej.base.enableRipple(true);

// Initializes the AI Assist control
let promptsData = [
    {
        prompt: "What is AI?",
        response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
];

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    prompts: promptsData,
    promptItemTemplate: promptItemContent,
    promptRequest: function (args) {
        setTimeout(function () {
            var foundPrompt = promptsData.find((promptObj) => promptObj.prompt === args.prompt);
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#prompt-item');

function promptItemContent(ctx) {
    var prompt = ctx.prompt.replace('<span class="e-icons e-circle-info"></span>', '');
    return `<div class="promptItemContent">
                <div class="prompt-header">You
                    <span class="e-icons e-user"></span>
                </div>
                <div class="content">${prompt}</div>
            </div>`;
}