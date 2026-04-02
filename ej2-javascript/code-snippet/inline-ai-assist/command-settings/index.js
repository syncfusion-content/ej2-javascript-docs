ej.base.enableRipple(true);

// Initializes the Inline AI Assist control
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
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
        itemSelect: function (args) {
            // Demo item selection: show processing then a simulated result
            inlineAIAssist.addResponse('Processing "' + args.command.label + '"...');
            setTimeout(function () {
                inlineAIAssist.addResponse('Result for "' + args.command.label + '": This is a sample transformed content returned by the Inline AI Assist.');
            }, 1000);
        }
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

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#command-settings');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}