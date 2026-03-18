ej.base.enableRipple(true);

// Initializes the AI Assist control
var inlineAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAssist.addResponse(defaultResponse);
        }, 1000);
    },
    responseSettings: {
        itemSelect: function (args) {
            if (args.command.label === 'Accept') {
                var editable = document.getElementById('editableText');
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAssist.prompts[inlineAssist.prompts.length - 1].response + '</p>';
                }
                inlineAssist.hidePopup();
            }
            else if (args.command.label === 'Discard') {
                inlineAssist.hidePopup();
            }
        }
    },
    popupWidth: '500px'
});

inlineAssist.appendTo('#defaultInlineAssist');

var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAssist.showPopup();
    });
}
