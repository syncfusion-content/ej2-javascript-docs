var azureOpenAIApiKey = ''; // replace your key
var azureOpenAIEndpoint = ''; // replace your endpoint
var azureOpenAIApiVersion = ''; // replace to match your resource
var azureDeploymentName = ''; // your Azure OpenAI deployment name
var stopStreaming = false;
var suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?',
];

var aiAssistView = new ej.interactivechat.AIAssistView({
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
    var lastResponse = "";
    var responseUpdateRate = 10;
    var i = 0;
    var responseLength = response.length;
    while (i < responseLength && !stopStreaming) {
        lastResponse += response[i];
        i++;
        if (i % responseUpdateRate === 0 || i === responseLength) {
            var htmlResponse = marked.parse(lastResponse);
            aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
            aiAssistView.scrollToBottom();
        }
        await new Promise(resolve => setTimeout(resolve, 15));
    }
    aiAssistView.promptSuggestions = suggestions;
}

function onPromptRequest(args) {
        var url =
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
        var responseText = reply.choices[0].message.content.trim() || 'No response received.';
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

 aiAssistView.appendTo('#defaultAssist');