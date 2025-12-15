ej.base.enableRipple(true);

let promptsData = [
    {
        prompt: "What is AI?",
        response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
];

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    prompts: promptsData,
    promptRequest: function (args) {
        setTimeout(function () {
            var foundPrompt = promptsData.find((promptObj) => promptObj.prompt === args.prompt);
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    },
    footerToolbarSettings: {
        toolbarPosition: 'Bottom'
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#prompts');

document.getElementById("toolbarBtn")?.addEventListener("click", () => {
  // Toggle the toolbar position
  aiAssistView.footerToolbarSettings.toolbarPosition =
    aiAssistView.footerToolbarSettings.toolbarPosition === "Inline"
      ? "Bottom"
      : "Inline";
});