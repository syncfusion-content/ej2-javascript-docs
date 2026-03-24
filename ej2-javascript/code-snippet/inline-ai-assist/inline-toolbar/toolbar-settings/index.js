ej.base.enableRipple(true);

var promptsData = [
    {
        prompt: "What is AI?",
        response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
];

// Initializes the Inline AI Assist control
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    prompts: promptsData,
    promptRequest: function (args) {
        setTimeout(function () {
            var foundPrompt = promptsData.find((promptObj) => promptObj.prompt === args.prompt);
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    },
    relateTo: '#summarizeBtn',
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
    },
    inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [{iconCss: 'e-icons e-assistview-icon', align: 'Left'}]
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#footersettings');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}
