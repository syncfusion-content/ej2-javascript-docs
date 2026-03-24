ej.base.enableRipple(true);

var commandSettings = {
        commands: [
            {
                label: 'Summarize',
                prompt: 'Summarize the content'
            },
            {
                label: 'Shorten',
                prompt: 'Shorten the content'
            },
            {
                label: 'Translate',
                prompt: 'Translate the content'
            },
            {
                label: 'Make professional',
                prompt: 'Make the content more professional'
            }
        ]
    }
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
inlineAIAssist.appendTo('#command-popup');

var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.commandSettings.commands = [];
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}
var showCommandsBtn = document.querySelector('#showCommandsBtn');
if (showCommandsBtn) {
    showCommandsBtn.addEventListener('click', function () {
        inlineAIAssist.commandSettings = commandSettings;
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
        inlineAIAssist.showCommandPopup();
    });
}

