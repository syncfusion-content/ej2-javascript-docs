import { AIAssistView, ToolbarItemClickedEventArgs, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize AI AssistView with Speech-to-Text
let aiAssistView = new AIAssistView({
    // Toolbar Settings with Refresh Button
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    // Speech-to-Text Configuration
    speechToTextSettings: {
        enable: true,
        tooltipSettings: {
            content: 'Click to start listening',
            stopContent: 'Click to stop listening',
            position: 'TopCenter'
        }
    },
    bannerTemplate: "#bannerContent",
    promptRequest: onPromptRequest
});

aiAssistView.appendTo('#aiAssistView');

function toolbarItemClicked(args: ToolbarItemClickedEventArgs) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
    }
}

function onPromptRequest(args: PromptRequestEventArgs) {
    if (!args.prompt.trim() || !aiAssistView) return;
    
    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiAssistView.addPromptResponse(defaultResponse, true);
}
