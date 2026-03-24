import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the Inline AI Assist control
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    inlineToolbarSettings: {
        items: [ { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' } ]
    },
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
inlineAIAssist.appendTo('#template');
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}

new DropDownButton({
    items: [
        { text: 'हिंदी' },
        { text: 'தமிழ்' },
        { text: 'తెలుగు' }
      ],
      content: 'English',
      iconCss: 'e-icons e-translate',
      cssClass: 'custom-dropdown'
}, '#ddMenu');
