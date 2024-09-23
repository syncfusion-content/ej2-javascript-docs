ej.base.enableRipple(true);

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    views: [
        {
            type: 'Assist',
            name: "Prompt",
            iconCss: 'e-icons e-assistview-icon'
        },
        {
            type: 'Custom',
            name: 'Response',
            iconCss: 'e-icons e-comment-show',
            viewTemplate: '<div class="view-container"><h5>Response view content</h5></div>'
        }
    ],
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#type');