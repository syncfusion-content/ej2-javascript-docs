ej.base.enableRipple(true);

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    views: [
        {
            type: 'Assist',
            name: "Prompt",
            viewTemplate: '<div class="view-container"><h5>Prompt view content</h5></div>'
        },
        {
            type: 'Custom',
            name: 'Response',
            viewTemplate: '<div class="view-container"><h5>Response view content</h5></div>'
        }
    ]
});

// Render initialized AI Assist.
aiAssistView.appendTo('#view-template');