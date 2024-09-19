ej.base.enableRipple(true);

// Initializes the AI Assist control
var defaultAIAssistView = new ej.interactivechat.AIAssistView({
    promptSuggestions: [
        "How do I prioritize my tasks?",
        "How can I improve my time management skills?"
    ],
    promptRequest: onPromptRequest
});

// Render initialized AI Assist.
defaultAIAssistView.appendTo('#defaultAssist');

var prompts = [
    {
        prompt: "How do I prioritize my tasks?",
        response: "Prioritize tasks by urgency and impact: tackle high-impact tasks first, delegate when possible, and break large tasks into smaller steps. For more assistance, feel free to ask—I’m here to help!"
    },
    {
        prompt: "How can I improve my time management skills?",
        response: "To improve time management skills, try setting clear goals, using a planner or digital tools, prioritizing tasks, breaking tasks into smaller steps, and minimizing distractions. Regularly review and adjust your approach for better efficiency."
    }
]

function onPromptRequest(args) {
    setTimeout(() => {
        var foundPrompt = prompts.find((promptObj) => promptObj.prompt === args.prompt);
        var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        
        defaultAIAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        
    }, 2000);
}