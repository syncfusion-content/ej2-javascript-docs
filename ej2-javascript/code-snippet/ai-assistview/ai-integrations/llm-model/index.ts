import { AIAssistView, PromptRequestEventArgs, ToolbarItemClickedEventArgs } from "@syncfusion/ej2-interactive-chat";
import marked from 'marked';

const suggestions = [
  'What are the best tools for organizing my tasks?',
  'How can I maintain work-life balance effectively?',
];
let stopStreaming: boolean = false;

// Initialize AI AssistView
const aiAssist = new AIAssistView({
     bannerTemplate:
 '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>',
  promptSuggestions: suggestions,
  toolbarSettings: {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: toolbarItemClicked,
  },
  promptRequest:onPromptrequest,
  stopRespondingClick: handleStopResponse
});

//  Handle user prompt: call local LLM via Ollama
async function onPromptrequest(args: PromptRequestEventArgs) {
  let lastResponse = "";
  const defaultResponse = "⚠️ Something went wrong while connecting to the AI service. Please check your Ollama application running background.";
  try {
      // Send request to Ollama API
      const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          model: 'deepseek-r1',
          prompt: `### Instruction:\nRespond in up to 5 lines.\n\n### Input:\n${args.prompt}`,
          stream: false,
      }),
      });
      const reply = await response.json();
      const responseUpdateRate = 10;

      // Stream AI response in chunks
      async function streamResponse(response:string) {
          let i = 0;
          const responseLength = response.length;
          while (i < responseLength && !stopStreaming) {
          lastResponse += response[i];
          i++;
          if (i % responseUpdateRate === 0 || i === responseLength) {
              const htmlResponse =marked.parse(lastResponse);
              aiAssist.addPromptResponse(htmlResponse, i === responseLength);
              aiAssist.scrollToBottom();
          }
          await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
      }
      aiAssist.promptSuggestions = suggestions;
 }
  if(response) {
  stopStreaming = false;
  streamResponse(reply.response);
  }

  } catch (error) {
      aiAssist.addPromptResponse(defaultResponse, true);
  aiAssist.promptSuggestions = suggestions;
  }
}

function handleStopResponse(): void {
  stopStreaming = true;
}

function toolbarItemClicked(args: ToolbarItemClickedEventArgs) {
  if (args.item.iconCss === 'e-icons e-refresh') {
    aiAssist.prompts = [];
    aiAssist.promptSuggestions = suggestions;
  }
}

// Append the AI AssistView to the container
aiAssist.appendTo('#llmAssist');
