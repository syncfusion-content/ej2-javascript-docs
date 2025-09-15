  import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
 import { GoogleGenerativeAI } from '@google/generative-ai';
 
// Initialize Gemini API
let geminiApiKey = ''; // Replace with your Gemini API key
let genAI = new GoogleGenerativeAI(geminiApiKey);

var suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?',
  ];

// Initializes the AI Assist control
var aiAssistView = new AIAssistView({
    promptSuggestions:suggestions,
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: toolbarItemClicked,
    },
    bannerTemplate: '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>',
    promptRequest: onPromptRequest
});


 function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
      aiAssistView.prompts = [];
      aiAssistView.promptSuggestions = suggestions;
    }
  };

async function onPromptRequest(args) {
         setTimeout(async () => {
            try {
                const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
                const result = await model.generateContent(args.prompt);
                const response = result.response.text();
                aiAssistView.addPromptResponse(marked.parse(response));
            } catch (error) {
                console.error('Error fetching Gemini response:', error);
                aiAssistView.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.');
            }
        }, 1000);
    };

    // Render initialized AI Assist.
aiAssistView.appendTo('#defaultAssist');
