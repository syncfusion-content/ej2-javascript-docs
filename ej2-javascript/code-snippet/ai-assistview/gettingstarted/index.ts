import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initializes the AI Assist control
let aiAssistView: AIAssistView = new AIAssistView({});

// Render initialized AI Assist.
aiAssistView.appendTo('#defaultAssist');