ej.base.enableRipple(true);

var commandSettings = {
    commands: [
        { label: 'Summarize', prompt: 'Summarize the content' },
        { label: 'Shorten', prompt: 'Shorten the content' },
        { label: 'Translate', prompt: 'Translate the content' },
        { label: 'Make professional', prompt: 'Make the content more professional' }
    ]
};

var showPopup = false;

// Initializes the Inline AI Assist control
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    close: function () {
        if (showPopup) {
            inlineAIAssist.showPopup();
        }
    },
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service.';
            inlineAIAssist.addResponse(defaultResponse);
        }, 1000);
    },
    // start with empty commands to demonstrate programmatic show
    commandSettings: { commands: [] },
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

// Summarize button opens the assistant popup
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        showPopup = true;
        inlineAIAssist.showPopup();
    });
}

// Button to load commands and explicitly show the command popup
var showCommandsBtn = document.querySelector('#showCommandsBtn');
if (showCommandsBtn) {
    showCommandsBtn.addEventListener('click', function () {
        inlineAIAssist.commandSettings = commandSettings;
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
        inlineAIAssist.showCommandPopup();
    });
}

// Button to hide the command popup
var hideCommandsBtn = document.querySelector('#hideCommandsBtn');
if (hideCommandsBtn) {
    hideCommandsBtn.addEventListener('click', function () {
        inlineAIAssist.hideCommandPopup();
        showPopup = false;
    });
}
