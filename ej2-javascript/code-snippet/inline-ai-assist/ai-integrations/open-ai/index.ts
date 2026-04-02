import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import marked from 'marked';

// Initialize Azure OpenAI
const azureOpenAIApiKey = ''; // replace your key
const azureOpenAIEndpoint = ''; // replace your endpoint
const azureOpenAIApiVersion = ''; // replace to match your resource
const azureDeploymentName = ''; // your Azure OpenAI deployment name
let stopStreaming = false;

// Initialize Inline AI Assist
let inlineAIAssist = new InlineAIAssist({
    promptRequest: onPromptRequest,
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

// Stream the model response to the UI in chunks
async function streamResponse(response: string) {
    let lastResponse = "";
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !stopStreaming) {
        lastResponse += response[i];
        i++;
        if (i % responseUpdateRate === 0 || i === responseLength) {
            const htmlResponse = marked.parse(lastResponse);
            inlineAIAssist.addResponse(htmlResponse, i === responseLength);
        }
        await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
    }
}

// Handle user prompt: call Azure OpenAI Chat Completions
function onPromptRequest(args:any) {
        const url =
        azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

        // Send the request to Azure OpenAI
        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: azureOpenAIApiKey,
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: args.prompt }],
            max_tokens: 150,
            stream: false
        }),
    })
    .then(response => response.json())
    .then(reply => {
        const responseText = reply.choices[0].message.content.trim() || 'No response received.';
        stopStreaming = false;
        streamResponse(responseText);
    })
    .catch((error: unknown) => {
        inlineAIAssist.addResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
        stopStreaming = true;
    });
}

function handleStopResponse() {
    stopStreaming = true;
}

 // Render Inline AI Assist
 inlineAIAssist.appendTo('#defaultInlineAssist');
 const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}
