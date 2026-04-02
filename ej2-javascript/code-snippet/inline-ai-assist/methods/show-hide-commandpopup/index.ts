import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const commandSettings = {
    commands: [
        { label: 'Summarize', prompt: 'Summarize the content' },
        { label: 'Shorten', prompt: 'Shorten the content' },
        { label: 'Translate', prompt: 'Translate the content' },
        { label: 'Make professional', prompt: 'Make the content more professional' }
    ]
};

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
            const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
    // start with empty commands to demonstrate programmatic show
    commandSettings: { commands: [] },
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command.label === 'Accept') {
                const editable = document.getElementById('editableText') as HTMLElement | null;
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1].response + '</p>';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                inlineAIAssist.hidePopup();
            }
        }
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#command-popup');

// Summarize button opens the assistant popup
const summarizeBtn: HTMLElement | null = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        showPopup = true;
        inlineAIAssist.showPopup();
    });
}

// Button to load commands and explicitly show the command popup
const showCommandsBtn: HTMLElement | null = document.querySelector('#showCommandsBtn');
if (showCommandsBtn) {
    showCommandsBtn.addEventListener('click', () => {
        inlineAIAssist.commandSettings = commandSettings;
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
        inlineAIAssist.showCommandPopup();
    });
}

// Button to hide the command popup
const hideCommandsBtn: HTMLElement | null = document.querySelector('#hideCommandsBtn');
if (hideCommandsBtn) {
    hideCommandsBtn.addEventListener('click', () => {
        inlineAIAssist.hideCommandPopup();
        showPopup = false;
    });
}
