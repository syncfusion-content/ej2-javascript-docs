import { InlineAIAssist, CommandItemSelectEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Inline AI Assist control
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
    commandSettings: {
        popupHeight: '200px',
        popupWidth: '250px',
        commands: [
            {
                label: 'Summarize',
                prompt: 'Summarize the content',
                groupBy: 'Improve content',
                iconCss: 'e-icons e-collapse-2',
                tooltip: 'Summarize'
            },
            {
                label: 'Shorten',
                prompt: 'Shorten the content',
                groupBy: 'Improve content',
                iconCss: 'e-icons e-shorten',
                tooltip: 'Shorten',
                disabled: true
            },
            {
                label: 'Translate',
                prompt: 'Translate the content',
                groupBy: 'Edit content',
                iconCss: 'e-icons e-translate'
            },
            {
                label: 'Make professional',
                prompt: 'Make the content more professional',
                groupBy: 'Edit content',
                iconCss: 'e-icons e-elaborate'
            }
        ],
        itemSelect: (args: CommandItemSelectEventArgs): void => {
            inlineAIAssist.addResponse('Processing "' + args.command.label + '"...');
            setTimeout(() => {
                inlineAIAssist.addResponse('Result for "' + args.command.label + '": This is a sample transformed content returned by the Inline AI Assist.');
            }, 1000);
        }
    },
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command && args.command.label === 'Accept') {
                const editable = document.getElementById('editableText') as HTMLElement | null;
                const last = inlineAIAssist.prompts && inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1];
                if (editable && last) {
                    editable.innerHTML = '<p>' + (last.response || '') + '</p>';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command && args.command.label === 'Discard') {
                inlineAIAssist.hidePopup();
            }
        }
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#command-settings');
const summarizeBtn: HTMLElement | null = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}
