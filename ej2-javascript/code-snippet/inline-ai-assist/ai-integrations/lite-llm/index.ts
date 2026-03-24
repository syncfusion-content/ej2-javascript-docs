import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';

// LiteLLM settings
const LITELLM_HOST = 'http://localhost:4000';
const LITELLM_API_KEY = ''; // If your LiteLLM proxy uses a master_key, set this to the same value; otherwise, leave as empty string

let stopStreaming = false;

// Initializes the AI Assist control
const inlineAIAssist = new InlineAIAssist({
    promptRequest: onPromptRequest,
    inlineToolbarSettings: {
        itemClick: (args: any) => {
            if (args.item.iconCss === 'e-icons e-inline-stop') {
                handleStopResponse();
            }
        }
    },
    relateTo: '#summarizeBtn',
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command.label === 'Accept') {
                const editable = document.getElementById('editableText') as HTMLElement | null;
                if (editable) {
                    editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1 ].response + '</p>';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                inlineAIAssist.hidePopup();
            }
        }
    }
});

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
            inlineAIAssist.addResponse(htmlResponse, i === responseLength);
        }
        await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
}

// Handle user prompt: call LiteLLM proxy
async function onPromptRequest(args: InlinePromptRequestEventArgs) {
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
        inlineAIAssist.addResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
        );
        stopStreaming = true;
    }
}

function handleStopResponse() {
    stopStreaming = true;
}

// Render Inline AI Assist
inlineAIAssist.appendTo('#defaultInlineAssist');
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        inlineAIAssist.showPopup();
    });
}
