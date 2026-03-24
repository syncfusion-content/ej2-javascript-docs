import { InlineAIAssist, InlinePromptRequestEventArgs } from "@syncfusion/ej2-interactive-chat";
import marked from 'marked';

let stopStreaming: boolean = false;

// Initialize Inline AI Assist
const inlineAIAssist = new InlineAIAssist({
  promptRequest:onPromptrequest,
  inlineToolbarSettings: {
    itemClick: (args: any) => {
      if (args.item.iconCss === 'e-icons e-inline-stop') {
          handleStopResponse();
      }
    }
  },
  relateTo: '#summarizeBtn',
  responseSettings: {
    itemSelect: (args: any): void => {
      if (args.command.label === 'Accept') {
          const editable = document.getElementById('editableText') as HTMLElement | null;
          if (editable) {
              editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1 ].response + '</p>';
          }
          inlineAIAssist.hidePopup();
      } else if (args.command.label === 'Discard') {
          inlineAIAssist.hidePopup();
      }
    }
  }
});

//  Handle user prompt: call local LLM via Ollama
async function onPromptrequest(args: InlinePromptRequestEventArgs) {
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
              inlineAIAssist.addResponse(htmlResponse, i === responseLength);
          }
          await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
      }
 }
  if(response) {
  stopStreaming = false;
  streamResponse(reply.response);
  }

  } catch (error) {
      inlineAIAssist.addResponse(defaultResponse, true);
  }
}

function handleStopResponse(): void {
  stopStreaming = true;
}

// Append the Inline AI Assist to the container
inlineAIAssist.appendTo('#defaultInlineAssist');
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}
