// Initialize Azure OpenAI
var azureOpenAIApiKey = ''; // replace your key
var azureOpenAIEndpoint = ''; // replace your endpoint
var azureOpenAIApiVersion = ''; // replace to match your resource
var azureDeploymentName = ''; // your Azure OpenAI deployment name
var stopStreaming = false;
var suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?',
];

// Initialize Inline AI Assist
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    promptRequest: onPromptRequest,
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

// Stream the model response to the UI in chunks
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
            inlineAIAssist.addResponse(htmlResponse, i === responseLength);
        }
        await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
    }
}

// Handle user prompt: call Azure OpenAI Chat Completions
function onPromptRequest(args) {
        var url =
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
        var responseText = reply.choices[0].message.content.trim() || 'No response received.';
        stopStreaming = false;
        streamResponse(responseText);
    })
    .catch(error => {
        inlineAIAssist.addResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
        stopStreaming = true;
    });
}

function handleStopResponse() {
    stopStreaming = true;
}

 // Render Inline AI Assist
 inlineAIAssist.appendTo('#defaultInlineAssist');
 var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}
