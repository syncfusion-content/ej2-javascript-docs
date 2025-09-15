 import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';
 
 // Initialize Gemini API
let openaiApiKey =''; // Replace with your Gemini API key
  
let suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?',
  ];
 // Initialize AI AssistView
 let aiAssistView: AIAssistView = new AIAssistView({
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

  function onPromptrequest(args) {
    setTimeout(async () => {
      let responseText = '';
      try {
        let response = await fetch('https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [{ role: 'user', content: args.prompt }],
              max_tokens: 150,
              stream: true
            }),
          }
        );
        let data = await response.json();
        responseText = data.choices[0].message.content.trim() || 'No response received.';
        aiAssistView.addPromptResponse( marked.parse(responseText));
      } catch (error) {
        aiAssistView.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
      }
    }, 1000);
  };
 // Render AI AssistView
 aiAssistView.appendTo('#defaultAssist');