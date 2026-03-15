import { AIAssistView, ToolbarItemClickedEventArgs, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let lastTranscript = ''; // Store the last transcript from transcriptChanged event

// Initialize AI AssistView with Speech Events
let aiAssistView = new AIAssistView({
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    speechToTextSettings: {
        enable: true,
        onStart: onSpeechStart,
        onStop: onSpeechStop,
        transcriptChanged: onTranscriptChanged,
        onError: onSpeechError
    },
    bannerTemplate: "#bannerContent",
    promptRequest: onPromptRequest
});

aiAssistView.appendTo('#aiAssistView');

// Speech event handlers
function onSpeechStart(args: any) {
    // Show visual feedback when recording begins
    const recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
        recordingIndicator.textContent = 'Recording...';
        recordingIndicator.className = 'status-indicator recording';
    }
    // Hide error message when recording starts
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

function onSpeechStop(args: any) {
    // Hide visual feedback when recording ends
    const recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
        recordingIndicator.textContent = 'Ready to record';
        recordingIndicator.className = 'status-indicator ready';
    }

    // Update transcript display to show final state
    const transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay && lastTranscript) {
        transcriptDisplay.textContent = lastTranscript;
        transcriptDisplay.style.fontStyle = 'normal';
    }

    // Clear the stored transcript for next session after a delay to allow user to see it
    setTimeout(function() {
        lastTranscript = '';
        if (transcriptDisplay) {
            transcriptDisplay.textContent = 'Waiting for speech input...';
        }
    }, 2000);
}

function onTranscriptChanged(args: any) {
    // Access transcript from various possible property names
    const currentTranscript = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
    const isFinal = args.isFinal || args.final || (args.result && args.result.isFinal) || false;
    
    // Store the transcript for use in onSpeechStop
    if (currentTranscript) {
        lastTranscript = currentTranscript;
    }
    
    // Update UI with interim results in real-time
    const transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay) {
        transcriptDisplay.textContent = currentTranscript;
        transcriptDisplay.style.fontStyle = isFinal ? 'normal' : 'italic';
    }
}

function onSpeechError(args: any) {
    // Display error message to user
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        const errorText = errorMessage.querySelector('.error-text');
        if (errorText) {
            errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
        }
        errorMessage.style.display = 'block';
    }
    // Reset recording status
    const recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
        recordingIndicator.textContent = 'Ready to record';
        recordingIndicator.className = 'status-indicator ready';
    }
}

function toolbarItemClicked(args: ToolbarItemClickedEventArgs) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
    }
}

function onPromptRequest(args: PromptRequestEventArgs) {
    if (!args.prompt.trim() || !aiAssistView) return;
    
    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiAssistView.addPromptResponse(defaultResponse, true);
}
