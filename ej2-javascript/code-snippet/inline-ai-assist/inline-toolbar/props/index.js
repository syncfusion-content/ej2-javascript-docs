ej.base.enableRipple(true);

// Merged Inline Toolbar properties sample
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
            { type: 'Button', iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Refresh', cssClass: 'refresh-btn', visible: true },
            { type: 'Button', iconCss: 'e-icons e-user', align: 'Right', cssClass: 'custom-btn', disabled: true, visible: true },
            { type: 'Separator' },
            { type: 'Button', iconCss: 'e-icons e-assistview-icon', align: 'Left', tooltip: 'Assist', visible: true }
        ]
    },
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'This merged sample demonstrates align, cssClass, disabled, type, inlineToolbarSettings, tooltip, and visible properties.';
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
inlineAIAssist.appendTo('#props');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}
