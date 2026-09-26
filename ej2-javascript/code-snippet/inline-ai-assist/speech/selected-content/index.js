ej.base.enableRipple(true);

var savedRange = null;
var isAccepted = false;

// Initializes the Inline AI Assist control with speech-to-text and selected content support
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    placeholder: 'Type or speak a prompt for the selected text...',
    responseMode: 'Inline',
    speechToTextSettings: {
        enable: true
    },
    // Triggered when the recognized voice prompt is submitted, combining it with the selected text
    promptRequest: function (args) {
        var selectedText = getSelectedText();
        var contextPrompt = args.prompt && selectedText
            ? args.prompt + ' for this content: ' + selectedText
            : (args.prompt || selectedText);

        if (!contextPrompt.trim()) {
            inlineAIAssist.addResponse(
                'Select text and use the microphone to dictate a prompt for the selected content.'
            );
            return;
        }

        setTimeout(function () {
            // Default placeholder response shown after the thinking delay
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse, true);
        }, 1000);
    },
    // Handles Accept and Discard buttons on the inline response
    responseSettings: {
        itemSelect: function (args) {
            if (args.command.label === 'Accept') {
                isAccepted = true;
                var editableText = document.getElementById('editableText');
                if (editableText) {
                    editableText.innerHTML = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                isAccepted = false;
                inlineAIAssist.hidePopup();
            }
        }
    }
});

inlineAIAssist.appendTo('#selectedContent');

// Opens the popup on Summarize button click
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}

// Opens the popup when the user finishes selecting text inside the editable area
var editableText = document.getElementById('editableText');
if (editableText) {
    editableText.addEventListener('mouseup', function () {
        var selection = window.getSelection();
        var range = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
        if (range && !range.collapsed) {
            savedRange = range.cloneRange();
            inlineAIAssist.dataBind();
            inlineAIAssist.showPopup();
        }
    });
}

function getSelectedText() {
    return savedRange ? savedRange.toString() : '';
}
