ej.base.enableRipple(true);

var aiAssistView = new ej.interactivechat.AIAssistView({
    // Toolbar Settings with Refresh Button
    toolbarSettings: {
        items: [{
            iconCss: 'e-icons e-refresh',
            align: 'Right'
        }],
        itemClicked: toolbarItemClicked,
    },
    // Speech-to-Text Configuration
    speechToTextSettings: {
        enable: true
    },
    bannerTemplate: "#bannerContent",
    promptRequest: onPromptRequest
});

aiAssistView.appendTo('#aiAssistView');

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
    }
}

function onPromptRequest(args) {
    if (!args.prompt.trim() || !aiAssistView) return;

    var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiAssistView.addPromptResponse(defaultResponse, true);
}