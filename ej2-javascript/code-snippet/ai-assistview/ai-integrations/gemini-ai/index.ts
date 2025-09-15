

 import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
 import { GoogleGenerativeAI } from '@google/generative-ai';
 import { marked } from 'marked';
 
 // Initialize Gemini API
 const geminiApiKey = ''; // Replace with your Gemini API key
 const genAI = new GoogleGenerativeAI(geminiApiKey);
  
const suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?',
  ];
 // Initialize AI AssistView
 const aiAssistView: AIAssistView = new AIAssistView({
    promptSuggestions: suggestions,
    toolbarSettings: {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    bannerTemplate: '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>',
    promptRequest: onPromptrequest
 });
 
 function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
      aiAssistView.prompts = [];
      aiAssistView.promptSuggestions = suggestions;
    }
  };

  function onPromptrequest(args: PromptRequestEventArgs) {
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
 // Render AI AssistView
 aiAssistView.appendTo('#defaultAssist');