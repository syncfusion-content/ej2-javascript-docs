import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let isAccepted: boolean = false;

// Initializes the Inline AI Assist control with speech-to-text tooltip settings
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    // Displays AI responses inline for Accept/Discard review
    responseMode: 'Inline',
    // Custom tooltips shown for the microphone button while idle and recording
    speechToTextSettings: {
        enable: true,
        tooltipSettings: {
            content: 'Click to start recording',
            stopContent: 'Click to stop recording'
        }
    },
    // Triggered when the voice prompt is submitted
    promptRequest: (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse: string = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse, true);
        }, 1000);
    },
    // Handles Accept and Discard buttons on the inline response
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command.label === 'Accept') {
                isAccepted = true;
                const editableText: HTMLElement | null = document.getElementById('editableText');
                if (editableText) {
                    editableText.innerHTML = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                isAccepted = false;
                inlineAIAssist.hidePopup();
            }
        }
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#tooltipSettings');
// Opens the popup on Summarize button click
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}
