import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Merged sample demonstrating toolbarPosition and toolbarText
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [ { text: 'Welcome User !', align: 'Right' } ]
    },
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'Merged sample showing toolbar-position and toolbar-text.';
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
inlineAIAssist.appendTo('#toolbarPosition');
const summarizeBtn: HTMLElement | null = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}

// Optional toggle button (keeps behavior from original sample)
const toolbarBtn = document.getElementById('toolbarBtn');
if (toolbarBtn) {
    toolbarBtn.addEventListener('click', () => {
        inlineAIAssist.inlineToolbarSettings.toolbarPosition =
            inlineAIAssist.inlineToolbarSettings.toolbarPosition === 'Inline' ? 'Bottom' : 'Inline';
    });
}
