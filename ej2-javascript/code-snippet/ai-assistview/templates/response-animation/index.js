ej.base.enableRipple(true);

// Initializes the AI Assist control
var aiAssistView = new ej.interactivechat.AIAssistView({
    responseAnimationTemplate: responseAnimationContent,
    promptRequest: function (args) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                aiAssistView.addPromptResponse(defaultResponse);
                resolve();
            }, 2000);
        });
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#response-animation');

function responseAnimationContent() {
    return `<div class="assistview-loading-status">
                <div class="assistview-grid-icon">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>
                <span class="assistview-loading-label">Generating</span>
            </div>`;
}
