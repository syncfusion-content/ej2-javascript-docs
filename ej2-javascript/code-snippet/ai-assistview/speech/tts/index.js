var azureOpenAIApiKey = 'Your_AzureOpenAIApiKey'; // replace your key
var azureOpenAIEndpoint = 'Your_AzureOpenAIEndpoint'; // replace your endpoint
var azureOpenAIApiVersion = 'Your_AzureOpenAIApiVersion'; // replace to match your resource
var azureDeploymentName = 'Your_AzureDeploymentName'; // your Azure OpenAI deployment name
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

// Handles toolbar item clicks, such as clearing the conversation on refresh
function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        stopStreaming = true; // Ensure streaming is stopped on refresh
    }
}

// Handles clicks on response toolbar items, such as copying, reading aloud, liking, or disliking the response
function onResponseToolbarItemClicked(args) {
    var responseHtml = aiAssistView.prompts[args.dataIndex].response;
    if (responseHtml) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = responseHtml;
        var text = (tempDiv.textContent || tempDiv.innerText || '').trim();
        if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
            if (currentUtterance) {
                speechSynthesis.cancel();
                currentUtterance = null;
                aiAssistView.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                aiAssistView.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
            } else {
                var utterance = new SpeechSynthesisUtterance(text);
                utterance.onend = function () {
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

// Streams the AI response character by character to create a typing effect
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

// Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
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

// Stops the ongoing streaming response
function handleStopResponse() {
    stopStreaming = true;
}

// Loads the external marked.js library for markdown parsing
function loadExternalFile() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
aiAssistView.appendTo('#aiAssistView');