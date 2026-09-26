import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let savedRange: Range | null = null;
let isAccepted: boolean = false;

// Initializes the Inline AI Assist control with speech-to-text and selected content support
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    placeholder: 'Type or speak a prompt for the selected text...',
    responseMode: 'Inline',
    speechToTextSettings: {
        enable: true
    },
    // Triggered when the recognized voice prompt is submitted, combining it with the selected text
    promptRequest: (args: InlinePromptRequestEventArgs): void => {
        const selectedText: string = getSelectedText();
        const contextPrompt: string = args.prompt && selectedText
            ? `${args.prompt} for this content: ${selectedText}`
            : (args.prompt || selectedText);

        if (!contextPrompt.trim()) {
            inlineAIAssist.addResponse(
                'Select text and use the microphone to dictate a prompt for the selected content.'
            );
            return;
        }

        setTimeout(() => {
            // Default placeholder response shown after the thinking delay
            const defaultResponse: string = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
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

inlineAIAssist.appendTo('#selectedContent');

// Opens the popup on Summarize button click
const summarizeBtn: HTMLElement | null = document.getElementById('summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}

const editableText: HTMLElement | null = document.getElementById('editableText');
if (editableText) {
    editableText.addEventListener('mouseup', () => {
 
}       const selection: Selection | null = window.getSelection();
        const range: Range | null = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
        if (range && !range.collapsed) {
            savedRange = range.cloneRange();
            inlineAIAssist.dataBind();
            inlineAIAssist.showPopup();
        }
    });
}

function getSelectedText(): string {
    return savedRange ? savedRange.toString() : '';
}
