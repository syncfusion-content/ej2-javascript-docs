import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
 import { GoogleGenerativeAI } from '@google/generative-ai';
 import marked from 'marked';
 
 let geminiApiKey = ''; // Replace with your Gemini API key
 let genAI = new GoogleGenerativeAI(geminiApiKey);
 let stopStreaming = false;
 
 const suggestions = [
     'What are the best tools for organizing my tasks?',
     'How can I maintain work-life balance effectively?',
 ];
 
 // Initializes the AI Assist control
 const aiAssistView = new AIAssistView({
     promptSuggestions: suggestions,
     toolbarSettings: {
         items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
         itemClicked: toolbarItemClicked,
     },
     bannerTemplate: '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>',
     promptRequest: onPromptRequest,
     stopRespondingClick: handleStopResponse
 });
 
 function toolbarItemClicked(args) {
     if (args.item.iconCss === 'e-icons e-refresh') {
         aiAssistView.prompts = [];
         aiAssistView.promptSuggestions = suggestions;
         stopStreaming = true; // Stop streaming on refresh
     }
 }
 
 async function streamResponse(response) {
     let lastResponse = "";
     const responseUpdateRate = 10;
     let i = 0;
     const responseLength = response.length;
     while (i < responseLength && !stopStreaming) {
         lastResponse += response[i];
         i++;
         if (i % responseUpdateRate === 0 || i === responseLength) {
             const htmlResponse = marked.parse(lastResponse);
             aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
             aiAssistView.scrollToBottom();
         }
         await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
     }
     aiAssistView.promptSuggestions = suggestions;
 }
 
 async function onPromptRequest(args) {
     try {
         const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); //Replace Your Model Name Here
         const result = await model.generateContent(args.prompt);
         const response = result.response.text();
         stopStreaming = false;
         await streamResponse(response);
     } catch (error) {
         aiAssistView.addPromptResponse(
             '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
         );
         stopStreaming = true;
     }
 }
 
 function handleStopResponse() {
     stopStreaming = true;
 }


    // Render initialized AI Assist.
aiAssistView.appendTo('#defaultAssist');
