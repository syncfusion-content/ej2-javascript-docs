import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Inline AI Assist control with built-in speech-to-text support
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    // Enables the built-in speech-to-text functionality using Web Speech API
    speechToTextSettings: {
        enable: true
    },
    // Triggered when a prompt is submitted from voice input
    promptRequest: (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
            // Default response displayed in the AI Assist popup
            let defaultResponse: string = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#stt');
// Opens the Inline AI Assist popup when the Summarize button is clicked
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        // Refreshes data bindings before showing the popup
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}
