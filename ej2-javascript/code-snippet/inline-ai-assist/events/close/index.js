ej.base.enableRipple(true);

// Initializes the AI Assist control
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    close: function () {
        // Your required action here
    },
    relateTo: '#summarizeBtn',
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
    responseSettings: {
        itemSelect: function (args) {
            if (args.command.label === 'Accept') {
                var editable = document.getElementById('editableText');
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1].response + '</p>';
                }
                inlineAIAssist.hidePopup();
            }
            else if (args.command.label === 'Discard') {
                inlineAIAssist.hidePopup();
            }
        }
    }
});

// Render initialized AI Assist.
inlineAIAssist.appendTo('#close');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}
