import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { Mention } from '@syncfusion/ej2-dropdowns';
import { enableRipple } from '@syncfusion/ej2-base';
import { marked } from 'marked';

enableRipple(true);

// Initialize AI AssistView component
let aiAssistView: AIAssistView = new AIAssistView({
    created: onAssistCreated,
    promptRequest: onPromptRequest,
    toolbarSettings: {
        items: [
            {
                iconCss: 'e-icons e-refresh',
                align: 'Right',
            }
        ],
        itemClicked: onToolbarItemClicked
    },
    stopRespondingClick: stopRespondingClick
});

aiAssistView.appendTo('#mcp-server');

let stopStreaming: boolean = false;
let sessionId: string = localStorage.getItem('assist_session') || (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function' ? globalThis.crypto.randomUUID() : String(Date.now()));
if (!localStorage.getItem('assist_session')) {
    localStorage.setItem('assist_session', sessionId);
}

function resetSession(): void {
    const prev = sessionId;
    sessionId = globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function' ? globalThis.crypto.randomUUID() : String(Date.now());
    localStorage.setItem('assist_session', sessionId);

    if (prev) {
        fetch('http://localhost:3000/assist/clear', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: prev })
        }).catch(() => { /* ignore */ });
    }
}

function onToolbarItemClicked(): void {
    aiAssistView.prompts = [];
    stopStreaming = true;
    resetSession();
}

function onAssistCreated(): void {
    const inputArea = document.querySelector('.e-aiassistview [contenteditable="true"]') as HTMLDivElement | null;

    if (!inputArea) {
        return;
    }

    const files = [
        'src/main.ts',
        'src/app/app.ts',
        'src/app/app.html',
        'src/app/app.css',
        'src/styles.css'
    ];

    // Create Mention instance locally
    const mention = new Mention({
        target: inputArea,
        showMentionChar: true,
        mentionChar: '@',
        dataSource: files,
        fields: { text: '' },
        change: () => {
            const inputEvent = new Event('input', { bubbles: true });
            inputArea.dispatchEvent(inputEvent);
        }
    });

    // Create a container and append the Mention popup to it
    const mentionContainer = document.createElement('div');
    document.body.appendChild(mentionContainer);
    mention.appendTo(mentionContainer);
}

function onPromptRequest(args: PromptRequestEventArgs): void {
    fetch('http://localhost:3000/assist/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sessionId: sessionId,
            prompt: args.prompt,
            model: 'gpt-4o-mini',
            temperature: 0.2,
            max_tokens: 512
        })
    })
    .then(r => (r.ok ? r.json() : r.text().then(t => Promise.reject(new Error(t)))))
    .then(data => {
        // Fixed: replaced data?.content with safe check
        const responseText = (data && data.content ? data.content : '').trim() || 'No response received.';
        stopStreaming = false;
        streamResponse(responseText);
    })
    .catch(() => {
        aiAssistView.addPromptResponse('⚠️ Failed to connect to server. Ensure MCP server is running at http://localhost:3000.', true);
        stopStreaming = true;
    });
}

async function streamResponse(response: string): Promise<void> {
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

        await new Promise(resolve => setTimeout(resolve, 15));
    }
}

function stopRespondingClick(): void {
    stopStreaming = true;
}