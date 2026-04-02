import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Merged Inline Toolbar properties sample
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
            { type: 'Button', iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Refresh', cssClass: 'refresh-btn', visible: true },
            { type: 'Button', iconCss: 'e-icons e-user', align: 'Right', cssClass: 'custom-btn', disabled: true, visible: true },
            { type: 'Separator' },
            { type: 'Button', iconCss: 'e-icons e-assistview-icon', align: 'Left', tooltip: 'Assist', visible: true }
        ]
    },
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'This merged sample demonstrates `align`, `cssClass`, `disabled`, `type`, `inlineToolbarSettings`, `tooltip`, and `visible` properties.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
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
inlineAIAssist.appendTo('#props');
const summarizeBtn: HTMLElement | null = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}
