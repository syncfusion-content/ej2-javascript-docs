import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let inlineAssist: InlineAIAssist = new InlineAIAssist({
    responseMode: 'Popup',
    promptRequest: function (args: InlinePromptRequestEventArgs) {
        var prompt = args.prompt;
        setTimeout(function () {
            var sampleResponse = "**You asked:** " + prompt + "\n" +
                "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
                "In your real application, send the prompt to an AI service here.";
            inlineAssist.addResponse(sampleResponse, true);
        }, 1000);
    },
    popupWidth: '500px'
});

inlineAssist.appendTo('#defaultInlineAssist');
inlineAssist.showPopup();
const modeSelect = document.getElementById('responseMode') as HTMLSelectElement | null;
if (modeSelect) {
    modeSelect.addEventListener('change', function (this: HTMLSelectElement) {
        inlineAssist.responseMode = this.value;
        inlineAssist.showPopup();
    });
}