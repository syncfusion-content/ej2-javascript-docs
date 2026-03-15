ej.base.enableRipple(true);

// Streaming markdown data
var markdownData = [{
        prompt: 'What is Markdown?',
        response: '# Markdown Guide\n\nMarkdown is a lightweight markup language:\n\n- **Headers:** Use `#`, `##`, `###`\n- **Bold:** `**text**` for bold\n- **Italic:** `*text*` for italic\n- **Code:** Triple backticks for code blocks\n- **Lists:** Use `-` for bullet points\n\nIt\'s simple and perfect for documentation.',
        suggestions: ['How do I use bold?', 'Show code block example']
    },
    {
        prompt: 'How do I use bold?',
        response: '# Bold Text in Markdown\n\nUse double asterisks `**text**` or double underscores `__text__`:\n\n**This is bold text**\n\nBoth methods produce the same result.',
        suggestions: ['What is Markdown?', 'Show code block example']
    }
];

// Prompt suggestions
var markdownSuggestions = [
    'What is Markdown?',
    'How do I use bold?',
    'Show code block example'
];

// Initialize AI AssistView with streaming
var aiAssistView = new ej.interactivechat.AIAssistView({
    promptSuggestions: markdownSuggestions,
    promptRequest: onPromptRequest
});

// Handle prompt request with streaming response
function onPromptRequest(args) {
    var markdownResponse = markdownData.find(function(data) {
        return data.prompt === args.prompt;
    });

    var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

    if (markdownResponse) {
        aiAssistView.addPromptResponse(markdownResponse.response);
        aiAssistView.promptSuggestions = markdownResponse.suggestions || markdownSuggestions;
    } else {
        aiAssistView.addPromptResponse(defaultResponse);
        aiAssistView.promptSuggestions = markdownSuggestions;
    }
}

// Render the component
aiAssistView.appendTo('#markdown-prompt');