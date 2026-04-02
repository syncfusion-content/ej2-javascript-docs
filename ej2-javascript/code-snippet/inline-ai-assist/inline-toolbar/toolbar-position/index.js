ej.base.enableRipple(true);

// Merged sample demonstrating toolbarPosition and toolbarText
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [ { text: 'Welcome User !', align: 'Right' } ]
    },
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'Merged sample showing toolbar-position and toolbar-text.';
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
inlineAIAssist.appendTo('#toolbarPosition');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}

// Optional toggle button (keeps behavior from original sample)
var toolbarBtn = document.getElementById('toolbarBtn');
if (toolbarBtn) {
    toolbarBtn.addEventListener('click', function () {
        inlineAIAssist.inlineToolbarSettings.toolbarPosition =
            inlineAIAssist.inlineToolbarSettings.toolbarPosition === 'Inline' ? 'Bottom' : 'Inline';
    });
}
