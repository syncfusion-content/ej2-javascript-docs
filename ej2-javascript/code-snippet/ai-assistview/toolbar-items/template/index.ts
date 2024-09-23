import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({
    toolbarSettings: {
        items: [ { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' } ]
    },
    promptRequest: () => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            aiAssistView.addPromptResponse(defaultResponse);
        }, 1000);
    }
});

// Render initialized AI Assist.
aiAssistView.appendTo('#template');

new DropDownButton({
    items: [
        { text: 'हिंदी' },
        { text: 'தமிழ்' },
        { text: 'తెలుగు' }
      ],
      content: 'English',
      iconCss: 'e-icons e-translate',
      cssClass: 'custom-dropdown'
}, '#ddMenu');
