import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Inline AI Assist control
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    prompt: 'What are the benifits of Inline AI Assist ?',
    relateTo: '#summarizeBtn',
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
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
inlineAIAssist.appendTo('#prompt');
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}
