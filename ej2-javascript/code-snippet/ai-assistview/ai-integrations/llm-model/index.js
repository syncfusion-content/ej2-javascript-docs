var suggestions = [
  'What are the best tools for organizing my tasks?',
  'How can I maintain work-life balance effectively?',
];
var stopStreaming = false;

// Initialize AI AssistView
var aiAssist = new ej.interactivechat.AIAssistView({
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
async function onPromptrequest(args) {
  var lastResponse = "";
  var defaultResponse = "⚠️ Something went wrong while connecting to the AI service. Please check your Ollama application running background.";
  try {
      // Send request to Ollama API
      var response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          model: 'deepseek-r1',
          prompt: `### Instruction:\nRespond in up to 5 lines.\n\n### Input:\n${args.prompt}`,
          stream: false,
      }),
      });
      var reply = await response.json();
      var responseUpdateRate = 10;

      // Stream AI response in chunks
      async function streamResponse(response) {
          var i = 0;
          var responseLength = response.length;
          while (i < responseLength && !stopStreaming) {
          lastResponse += response[i];
          i++;
          if (i % responseUpdateRate === 0 || i === responseLength) {
              var htmlResponse =marked.parse(lastResponse);
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

function handleStopResponse() {
  stopStreaming = true;
}

function toolbarItemClicked(args) {
  if (args.item?.iconCss === 'e-icons e-refresh') {
    aiAssist.prompts = [];
    aiAssist.promptSuggestions = suggestions;
  }
}

// Append the AI AssistView to the container
aiAssist.appendTo('#llmAssist');