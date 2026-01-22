import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';

// LiteLLM settings
const LITELLM_HOST = 'http://localhost:4000';
const LITELLM_API_KEY = ''; // If your LiteLLM proxy uses a master_key, set this to the same value; otherwise, leave as empty string

let stopStreaming = false;

const suggestions = [
    'How do I prioritize my tasks?',
    'How can I improve my time management skills?'
];

// Initializes the AI Assist control
const aiAssistView = new AIAssistView({
    promptSuggestions: suggestions,
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    bannerTemplate: '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>How can I help you today?</h3></div>',
    promptRequest: onPromptRequest,
    stopRespondingClick: handleStopResponse
});

function toolbarItemClicked(args: any) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        aiAssistView.promptSuggestions = suggestions;
        stopStreaming = true; // Stop streaming on refresh
    }
}

// Stream AI response in chunks
async function streamResponse(response: string) {
    let lastResponse = '';
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
        await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
    aiAssistView.promptSuggestions = suggestions;
}

// Handle user prompt: call LiteLLM proxy
async function onPromptRequest(args: PromptRequestEventArgs) {
    const url = `${LITELLM_HOST.replace(/\/$/, '')}/v1/chat/completions`;

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(LITELLM_API_KEY ? { Authorization: `Bearer ${LITELLM_API_KEY}` } : {}),
            },
            body: JSON.stringify({
                model: 'openai/gpt-4o-mini', // Must match model_name in config.yaml
                messages: [{ role: 'user', content: args.prompt }],
                temperature: 0.7,
                max_tokens: 300,
                stream: false,
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const reply = await res.json();
        const responseText = reply.choices?.[0]?.message?.content?.trim() || 'No response received.';
        stopStreaming = false;
        await streamResponse(responseText);
    } catch (error) {
        console.error(error);
        aiAssistView.addPromptResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
        );
        stopStreaming = true;
    }
}

function handleStopResponse() {
    stopStreaming = true;
}

// Render AI AssistView
aiAssistView.appendTo('#defaultAssist');