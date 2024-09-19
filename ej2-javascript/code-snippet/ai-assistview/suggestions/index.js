ej.base.enableRipple(true);


// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    promptSuggestions: [
        "Best practices for clean, maintainable code?",
        "How to optimize code editor for speed?"
    ],
    promptRequest: function () {
        setTimeout(function () {
            var response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
            var response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(args.prompt === aiAssistView.promptSuggestions[0] ? response1 : args.prompt === aiAssistView.promptSuggestions[1] ? response2 : defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#suggestions');