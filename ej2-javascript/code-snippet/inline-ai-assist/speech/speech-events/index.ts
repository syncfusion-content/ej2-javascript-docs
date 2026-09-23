import { InlineAIAssist, InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let lastTranscript: string = '';
let isAccepted: boolean = false;

// Updates the status panel when speech recognition begins
function onSpeechStart(args: any): void {
    const recordingStatus: HTMLElement | null = document.getElementById('recordingStatus');
    if (recordingStatus) {
        recordingStatus.textContent = 'Recording...';
        recordingStatus.className = 'status-indicator recording';
    }
    const errorMessage: HTMLElement | null = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Resets the status and displays the captured transcript after recognition stops
function onSpeechStop(args: any): void {
    const recordingStatus: HTMLElement | null = document.getElementById('recordingStatus');
    if (recordingStatus) {
        recordingStatus.textContent = 'Ready to record';
        recordingStatus.className = 'status-indicator ready';
    }
    const transcriptDisplay: HTMLElement | null = document.getElementById('transcriptDisplay');
    if (transcriptDisplay && lastTranscript) {
        transcriptDisplay.textContent = lastTranscript;
        transcriptDisplay.style.fontStyle = 'normal';
    }
    setTimeout(() => {
        lastTranscript = '';
        if (transcriptDisplay) {
            transcriptDisplay.textContent = 'Waiting for speech input...';
        }
    }, 2000);
}

// Streams interim and final transcripts to the status panel during recognition
function onTranscriptChanged(args: any): void {
    const currentTranscript: string = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
    const isFinal: boolean = args.isFinal || args.final || (args.result && args.result.isFinal) || false;

    if (currentTranscript) {
        lastTranscript = currentTranscript;
    }

    const transcriptDisplay: HTMLElement | null = document.getElementById('transcriptDisplay');
    if (transcriptDisplay) {
        transcriptDisplay.textContent = currentTranscript;
        transcriptDisplay.style.fontStyle = isFinal ? 'normal' : 'italic';
    }
}

// Surfaces recognition errors in the status panel and resets the recording state
function onSpeechError(args: any): void {
    const errorMessage: HTMLElement | null = document.getElementById('errorMessage');
    if (errorMessage) {
        const errorText: HTMLElement | null = errorMessage.querySelector('.error-text');
        if (errorText) {
            errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
        }
        errorMessage.style.display = 'block';
    }
    const recordingStatus: HTMLElement | null = document.getElementById('recordingStatus');
    if (recordingStatus) {
        recordingStatus.textContent = 'Ready to record';
        recordingStatus.className = 'status-indicator ready';
    }
}

// Initializes the Inline AI Assist control with speech-to-text events
let inlineAIAssist: InlineAIAssist = new InlineAIAssist({
    relateTo: '#summarizeBtn',
    // Displays AI responses inline so users can Accept or Discard them
    responseMode: 'Inline',
    // Wires up all speech recognition lifecycle event handlers
    speechToTextSettings: {
        enable: true,
        onStart: onSpeechStart,
        onStop: onSpeechStop,
        transcriptChanged: onTranscriptChanged,
        onError: onSpeechError
    },
    // Triggered when the recognized voice prompt is submitted
    promptRequest: (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
            // Default placeholder response shown after the thinking delay
            let defaultResponse: string = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse, true);
        }, 1000);
    },
    // Handles Accept and Discard buttons on the inline response
    responseSettings: {
        itemSelect: (args: any): void => {
            if (args.command.label === 'Accept') {
                isAccepted = true;
                const editableText: HTMLElement | null = document.getElementById('editableText');
                if (editableText) {
                    editableText.innerHTML = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                }
                inlineAIAssist.hidePopup();
            } else if (args.command.label === 'Discard') {
                isAccepted = false;
                inlineAIAssist.hidePopup();
            }
        }
    }
});

// Render initialized Inline AI Assist.
inlineAIAssist.appendTo('#speechEvents');
// Opens the popup on Summarize button click
const summarizeBtn: HTMLElement = document.querySelector('#summarizeBtn') as HTMLElement;
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', () => {
        // Refreshes the control state before displaying the popup
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}