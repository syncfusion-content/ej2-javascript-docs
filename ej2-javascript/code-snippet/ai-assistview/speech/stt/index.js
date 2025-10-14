const azureOpenAIApiKey = 'Your_AzureOpenAIApiKey'; // replace your key
const azureOpenAIEndpoint = 'Your_AzureOpenAIEndpoint'; // replace your endpoint
const azureOpenAIApiVersion = 'Your_AzureOpenAIApiVersion'; // replace to match your resource
const azureDeploymentName = 'Your_AzureDeploymentName'; // your Azure OpenAI deployment name
var stopStreaming = false;
loadExternalFile();
var aiAssistView = new ej.interactivechat.AIAssistView({
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    promptToolbarSettings: {
        itemClicked: (args) => {
            if (args.item.iconCss === "e-icons e-assist-edit") {
                const assistviewFooter = document.querySelector('#assistview-footer');
                assistviewFooter.innerHTML = aiAssistView.prompts[args.dataIndex].prompt;
                toggleButtons();
            }
        }
    },
    footerTemplate: "#footerContent",
    bannerTemplate: "#bannerContent",
    promptRequest: onPromptRequest,
    stopRespondingClick: handleStopResponse
});
aiAssistView.appendTo('#aiAssistView');

// Initialize Speech-to-Text component
var speechToTextObj = new ej.inputs.SpeechToText({
    transcriptChanged: onTranscriptChange,
    onStop: onListeningStop,
    created: onCreated,
    cssClass: 'e-flat'
});
speechToTextObj.appendTo('#speechToText');

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
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
    toggleButtons();
}

function onPromptRequest(args) {
    if (!args?.prompt?.trim() || !aiAssistView) return;
    stopStreaming = false;
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
            toggleButtons();
        });
}

// Updates transcript in the input area when speech-to-text transcribes
function onTranscriptChange(args) {
    document.querySelector('#assistview-footer').innerText = args.transcript;
}

// Handles actions when speech listening stops
function onListeningStop() {
    toggleButtons();
}

// Handles actions after component creation
function onCreated() {
    var assistviewFooter = document.querySelector('#assistview-footer');
    var sendButton = document.querySelector('#assistview-sendButton');

    sendButton.addEventListener('click', sendIconClicked);
    assistviewFooter.addEventListener('input', toggleButtons);

    assistviewFooter.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            sendIconClicked();
            e.preventDefault(); // Prevent the default behavior of the Enter key
        }
    });

    toggleButtons();
}

// Toggles the visibility of the send and speech-to-text buttons
function toggleButtons() {
    var assistviewFooter = document.querySelector('#assistview-footer');
    var sendButton = document.querySelector('#assistview-sendButton');
    var speechButton = document.querySelector('#speechToText');

    var hasText = assistviewFooter.innerText.trim() !== '';
    sendButton.classList.toggle('visible', hasText);
    speechButton.classList.toggle('visible', !hasText);

    if (!hasText && (assistviewFooter.innerHTML === '<br>' || !assistviewFooter.innerHTML.trim())) {
        assistviewFooter.innerHTML = '';
    }
}

// Handles send button click event
function sendIconClicked() {
    var assistviewFooter = document.querySelector('#assistview-footer');
    aiAssistView.executePrompt(assistviewFooter.innerText);
    assistviewFooter.innerText = "";
}

function handleStopResponse() {
    stopStreaming = true;
    toggleButtons();
}

function loadExternalFile() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
