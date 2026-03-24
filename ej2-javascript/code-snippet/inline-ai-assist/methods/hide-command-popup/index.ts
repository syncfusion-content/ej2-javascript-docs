import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let showPopup = false;

// Initializes the Inline AI Assist control
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    close: () => {
        if (showPopup) {
            inlineAIAssist.showPopup();
        }
    },
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
    commandSettings: {
        commands: [
            {
                label: 'Summarize',
                prompt: 'Summarize the content'
            },
            {
                label: 'Shorten',
                prompt: 'Shorten the content'
            },
            {
                label: 'Translate',
                prompt: 'Translate the content'
            },
            {
                label: 'Make professional',
                prompt: 'Make the content more professional'
            }
        ]
    },
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command.label === 'Accept') {
                const editable = document.getElementById('editableText') as HTMLElement | null;
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1 ].response + '</p>';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                inlineAIAssist.hidePopup();
            }
        }
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#hide-commands');
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        showPopup = true;
        inlineAIAssist.showPopup();
    });
}
const hideCommandsBtn: HTMLElement = document.querySelector('#hideCommandsBtn') as HTMLElement;
if (hideCommandsBtn) {
    hideCommandsBtn.addEventListener('click', () => {
        inlineAIAssist.hideCommandPopup();
        showPopup = false;
    });
}
