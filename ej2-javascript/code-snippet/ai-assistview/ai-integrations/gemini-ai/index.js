var geminiApiKey = ''; // Replace with your real Gemini API key
var stopStreaming = false;

var suggestions = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?'
];

var aiAssistView = new ej.interactivechat.AIAssistView({
    promptSuggestions: suggestions,
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    },
    bannerTemplate: '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>',
    promptRequest: onPromptRequest,
    stopRespondingClick: handleStopResponse
});

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        aiAssistView.promptSuggestions = suggestions;
        stopStreaming = true; // Stop streaming on refresh
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
    var model = 'gemini-2.5-flash'; // Replace Your Model Name Here 
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
        aiAssistView.addPromptResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
        stopStreaming = true;
    });
}

function handleStopResponse() {
    stopStreaming = true;
}

aiAssistView.appendTo('#defaultAssist');