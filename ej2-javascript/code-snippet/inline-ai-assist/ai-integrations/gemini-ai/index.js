 // Initialize Gemini API
var geminiApiKey = ''; // Replace with your real Gemini API key
var stopStreaming = false;

// Initializes the Inline AI Assist control
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

// Handle user prompt: call Gemini model
function onPromptRequest(args) {
    var model = 'gemini-2.5-flash'; // Select the Gemini model (update model name as needed)
    var url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`;
    
    var requestBody = {
        contents: [{ parts: [{ text: args.prompt }]}]
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var fullResponse = data.candidates[0].content.parts[0].text;
        stopStreaming = false;
        streamResponse(fullResponse);
    })
    .catch(function(error) {
        inlineAIAssist.addResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
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
