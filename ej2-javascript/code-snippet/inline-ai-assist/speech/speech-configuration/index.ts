import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Inline AI Assist control with speech recognition language, button settings, and interim results
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    // Configures language, interim results, and custom microphone button labels and icons
    speechToTextSettings: {
        enable: true,
        lang: 'en-US',
        allowInterimResults: true,
        buttonSettings: {
            content: 'Start Recording',
            stopContent: 'Stop Recording',
            iconCss: 'e-icons e-microphone',
            stopIconCss: 'e-icons e-microphone-off'
        }
    },
    // Triggered once the recognized voice prompt is submitted
    promptRequest: (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
            // Default response for the configured speech recognition scenario
            let defaultResponse: string = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#speech-configuration');
// Opens the Inline AI Assist popup on Summarize button click
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        // Refreshes the control state before displaying the popup
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}
