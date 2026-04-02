
var stopStreaming = false;

// Initialize Inline AI Assist
var inlineAIAssist = new ej.interactivechat.AIAssistView({
  promptRequest:onPromptrequest,
  inlineToolbarSettings: {
        itemClick: function (args) {
            if (args.item.iconCss === 'e-icons e-inline-stop') {
                handleStopResponse();
            }
        }
    },
    relateTo: '#summarizeBtn',
    responseSettings: {
        itemSelect: function (args) {
            if (args.command.label === 'Accept') {
                var editable = document.getElementById('editableText');
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1].response + '</p>';
                }
                inlineAIAssist.hidePopup();
            }
            else if (args.command.label === 'Discard') {
                inlineAIAssist.hidePopup();
            }
        }
    }
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
              inlineAIAssist.addResponse(htmlResponse, i === responseLength);
          }
          await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
      }
      inlineAIAssist.promptSuggestions = suggestions;
 }
  if(response) {
  stopStreaming = false;
  streamResponse(reply.response);
  }

  } catch (error) {
      inlineAIAssist.addResponse(defaultResponse, true);
  inlineAIAssist.promptSuggestions = suggestions;
  }
}

function handleStopResponse() {
  stopStreaming = true;
}

// Append the Inline AI Assist to the container
inlineAIAssist.appendTo('#defaultInlineAssist');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}
