ej.base.enableRipple(true);

var responseItems = [
    {
        label: 'Regenerate',
        iconCss: 'e-icons e-refresh',
        tooltip: 'Regenerate response'
    },
    {
        label: 'Copy',
        iconCss: 'e-icons e-copy',
        disabled: true,
        tooltip: 'Copy response'
    },
    {
        label: 'Summarize',
        iconCss: 'e-icons e-bookmark',
        groupBy: 'Actions',
        tooltip: 'Summarize response'
    },
    {
        label: 'Translate',
        iconCss: 'e-icons e-globe',
        groupBy: 'Actions',
        tooltip: 'Translate response'
    }
];

// Initializes the Inline AI Assist control
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
    responseSettings: {
        items: responseItems,
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

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#response-settings');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}