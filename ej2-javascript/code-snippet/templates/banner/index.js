ej.base.enableRipple(true);

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    bannerTemplate: '<div class="banner-content"><h3><span class="e-icons e-assistview-icon"></span>AI Assistance</h3></div>',
    promptRequest: function () {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#banner');