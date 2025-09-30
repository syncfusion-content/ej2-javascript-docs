import { AIAssistView } from '@syncfusion/ej2-interactive-chat';
import marked from 'marked';

const azureOpenAIApiKey = 'YOUR_AZURE_OPENAI_API_KEY'; // replace your key
const azureOpenAIEndpoint = 'YOUR_AZURE_OPENAI_API_ENDPOINT'; // replace your endpoint
const azureOpenAIApiVersion = 'YOUR_AZURE_OPENAI_API_VERSION'; // replace to match your resource
const azureDeploymentName = 'YOUR_DEPLOYMENT_NAME'; // your Azure OpenAI deployment name
let stopStreaming = false;
let suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?',
];

// Initialize AI AssistView
let aiAssistView = new AIAssistView({
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
        stopStreaming = true; // Ensure streaming is stopped on refresh
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
        await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
    }
    aiAssistView.promptSuggestions = suggestions;
}

function onPromptRequest(args) {
        const url =
        azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

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
    .catch(error => {
        aiAssistView.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
        stopStreaming = true;
    });
}

function handleStopResponse() {
    stopStreaming = true;
}
 // Render AI AssistView
 aiAssistView.appendTo('#defaultAssist');