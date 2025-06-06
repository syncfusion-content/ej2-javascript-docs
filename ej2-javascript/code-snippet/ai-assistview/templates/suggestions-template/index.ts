import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({
    promptSuggestions: [
        "Best practices for clean, maintainable code?",
        "How to optimize code editor for speed?"
    ],
    promptSuggestionItemTemplate: suggestionItemContent,
    promptRequest: (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
            let response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(args.prompt === aiAssistView.promptSuggestions[0] ? response1 : args.prompt === aiAssistView.promptSuggestions[1] ? response2 : defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#suggestions-template');

function suggestionItemContent(ctx: any) {
    return `<div class='suggestion-item active'>
                <span class="e-icons e-circle-info"></span>
                <div class="assist-suggestion-content">${ctx.promptSuggestion}</div>
            </div>`;
}
