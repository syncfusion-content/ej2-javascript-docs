const azureOpenAIApiKey = 'Your_AzureOpenAIApiKey'; // replace your key
const azureOpenAIEndpoint = 'Your_AzureOpenAIEndpoint'; // replace your endpoint
const azureOpenAIApiVersion = 'Your_AzureOpenAIApiVersion'; // replace to match your resource
const azureDeploymentName = 'Your_AzureDeploymentName'; // your Azure OpenAI deployment name
var stopStreaming = false;
var currentUtterance;
loadExternalFile();
var aiAssistView = new ej.interactivechat.AIAssistView({
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    responseToolbarSettings: {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ],
        itemClicked: onResponseToolbarItemClicked
    },
    bannerTemplate: "#bannerContent",
    promptRequest: onPromptRequest,
    stopRespondingClick: handleStopResponse
});

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        stopStreaming = true; // Ensure streaming is stopped on refresh
    }
}

function onResponseToolbarItemClicked(args) {
    const responseHtml = aiAssistView.prompts[args.dataIndex].response;
    if (responseHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = responseHtml;
        const text = (tempDiv.textContent || tempDiv.innerText || '').trim();
        if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
            if (currentUtterance) {
                speechSynthesis.cancel();
                currentUtterance = null;
                aiAssistView.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                aiAssistView.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
            } else {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.onend = () => {
                    currentUtterance = null;
                    aiAssistView.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                    aiAssistView.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
                };
                speechSynthesis.speak(utterance);
                currentUtterance = utterance;
                aiAssistView.responseToolbarSettings.items[1].iconCss = 'e-icons e-assist-stop';
                aiAssistView.responseToolbarSettings.items[1].tooltip = 'Stop';
            }
        }
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
function loadExternalFile() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
aiAssistView.appendTo('#aiAssistView');