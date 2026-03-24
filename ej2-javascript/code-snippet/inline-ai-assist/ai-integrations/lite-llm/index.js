var LITELLM_HOST = 'http://localhost:4000';
var LITELLM_API_KEY = '';
var stopStreaming = false;
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

// Stream AI response in chunks
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
        await new Promise(resolve => setTimeout(resolve, 15));
    }
}

// Handle user prompt: call LiteLLM proxy
function onPromptRequest(args) {
    var url = LITELLM_HOST.replace(/\/$/, '') + "/v1/chat/completions";
    
    var headers = { 'Content-Type': 'application/json' };
    if (LITELLM_API_KEY) {
        headers['Authorization'] = 'Bearer ' + LITELLM_API_KEY;
    }
    
    var requestBody = {
        model: 'openai/gpt-4o-mini',
        messages: [{ role: 'user', content: args.prompt }],
        temperature: 0.7,
        max_tokens: 300,
        stream: false
    };

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        return response.json();
    })
    .then(function(reply) {
        var responseText = reply.choices[0].message.content.trim() || 'No response received.';
        stopStreaming = false;
        streamResponse(responseText);
    })
    .catch(function(error) {
        console.error(error);
        inlineAIAssist.addResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
        );
        stopStreaming = true;
    });
}

function handleStopResponse() {
    stopStreaming = true;
}

inlineAIAssist.appendTo('#defaultInlineAssist');
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.showPopup();
    });
}