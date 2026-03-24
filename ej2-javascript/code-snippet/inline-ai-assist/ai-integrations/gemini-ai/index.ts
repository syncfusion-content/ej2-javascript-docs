
 import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
 import { GoogleGenerativeAI } from '@google/generative-ai';
 import { marked } from 'marked';
 
 // Initialize Gemini API
const geminiApiKey = ''; // Replace with your Gemini API key
let genAI = new GoogleGenerativeAI(geminiApiKey);
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
    let lastResponse = "";
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

// Handle user prompt: call Gemini model
async function onPromptRequest(args: InlinePromptRequestEventArgs) {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Select the Gemini model (update model name as needed)
        const result = await model.generateContent(args.prompt);
        const response = result.response.text();
        stopStreaming = false;
        await streamResponse(response);
    } catch (error) {
        inlineAIAssist.addResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
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