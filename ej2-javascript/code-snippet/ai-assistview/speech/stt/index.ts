import { AIAssistView, ToolbarItemClickedEventArgs, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { SpeechToText, TranscriptChangedEventArgs } from '@syncfusion/ej2-inputs';
import marked from 'marked';

// Initialize Gemini API (using OpenAI API in this case)
const azureOpenAIApiKey = 'Your_AzureOpenAIApiKey'; // replace your key
const azureOpenAIEndpoint = 'Your_AzureOpenAIEndpoint'; // replace your endpoint
const azureOpenAIApiVersion = 'Your_AzureOpenAIApiVersion'; // replace to match your resource
const azureDeploymentName = 'Your_AzureDeploymentName'; // your Azure OpenAI deployment name
let stopStreaming = false;

// Initialize AI AssistView
let aiAssistView = new AIAssistView({
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    promptToolbarSettings: {
        itemClicked: (args: ToolbarItemClickedEventArgs) => {
            if (args.item.iconCss === "e-icons e-assist-edit") {
                const assistviewFooter: HTMLElement = document.querySelector('#assistview-footer');
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
let speechToTextObj: SpeechToText = new SpeechToText({
    transcriptChanged: onTranscriptChange,
    onStop: onListeningStop,
    created: onCreated,
    cssClass: 'e-flat',
});
speechToTextObj.appendTo('#speechToText');

function toolbarItemClicked(args: ToolbarItemClickedEventArgs) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        stopStreaming = true; // Ensure streaming is stopped on refresh
    }
}

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
            aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
            aiAssistView.scrollToBottom();
        }
        await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
    }
    toggleButtons();
}

function onPromptRequest(args: PromptRequestEventArgs) {
    if (!args?.prompt?.trim() || !aiAssistView) return;
    stopStreaming = false;
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
        .catch((error: unknown) => {
            aiAssistView.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
            stopStreaming = true;
            toggleButtons();
        });
}

// Handles actions when speech listening stops
function onListeningStop() {
    toggleButtons();
}

function onTranscriptChange(args: TranscriptChangedEventArgs): void {
    (document.querySelector('#assistview-footer') as HTMLElement).innerText = args.transcript;
}

// Handles actions after component creation
function onCreated(): void {
    let assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
    let sendButton = document.querySelector('#assistview-sendButton') as HTMLElement;

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
function toggleButtons(): void {
    let assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
    let sendButton = document.querySelector('#assistview-sendButton') as HTMLElement;
    let speechButton = document.querySelector('#speechToText') as HTMLElement;

    let hasText = assistviewFooter.innerText.trim() !== '';
    sendButton.classList.toggle('visible', hasText);
    speechButton.classList.toggle('visible', !hasText);

    if (!hasText && (assistviewFooter.innerHTML === '<br>' || !assistviewFooter.innerHTML.trim())) {
        assistviewFooter.innerHTML = '';
    }
}

// Handles send button click event
function sendIconClicked(): void {
    var assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
    aiAssistView.executePrompt(assistviewFooter.innerText);
    assistviewFooter.innerText = '';
}

function handleStopResponse() {
    stopStreaming = true;
}
