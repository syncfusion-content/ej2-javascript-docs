import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let inlineAssist: InlineAIAssist = new InlineAIAssist({
    responseMode: 'Popup',
    relateTo: '#summarizeBtn',
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAssist.addResponse(defaultResponse);
        }, 1000);
    },
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command.label === 'Accept') {
                const editable = document.getElementById('editableText') as HTMLElement | null;
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAssist.prompts[inlineAssist.prompts.length - 1 ].response + '</p>';
                }
                inlineAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                inlineAssist.hidePopup();
            }
        }
    }
});

inlineAssist.appendTo('#defaultInlineAssist');
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAssist.showPopup();
    });
}
const modeSelect = document.getElementById('responseMode') as HTMLSelectElement | null;
if (modeSelect) {
    modeSelect.addEventListener('change', function (this: HTMLSelectElement) {
        inlineAssist.responseMode = this.value;
        inlineAssist.showPopup();
    });
}