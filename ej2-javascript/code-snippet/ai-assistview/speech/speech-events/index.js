ej.base.enableRipple(true);

let lastTranscript = ''; // Store the last transcript from transcriptChanged event

var aiAssistView = new ej.interactivechat.AIAssistView({
    toolbarSettings: {
        items: [{
            iconCss: 'e-icons e-refresh',
            align: 'Right'
        }],
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
function onSpeechStart(args) {
    // Show visual feedback when recording begins
    var recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
        recordingIndicator.textContent = 'Recording...';
        recordingIndicator.className = 'status-indicator recording';
    }
    // Hide error message when recording starts
    var errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

function onSpeechStop(args) {

    // Hide visual feedback when recording ends
    var recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
        recordingIndicator.textContent = 'Ready to record';
        recordingIndicator.className = 'status-indicator ready';
    }

    // Update transcript display to show final state
    var transcriptDisplay = document.getElementById('transcriptDisplay');
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

function onTranscriptChanged(args) {
    // Access transcript from various possible property names
    var currentTranscript = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
    var isFinal = args.isFinal || args.final || (args.result && args.result.isFinal) || false;

    // Store the transcript for use in onSpeechStop
    if (currentTranscript) {
        lastTranscript = currentTranscript;
    }

    // Update UI with interim results in real-time
    var transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay) {
        transcriptDisplay.textContent = currentTranscript;
        transcriptDisplay.style.fontStyle = isFinal ? 'normal' : 'italic';
    }
}

function onSpeechError(args) {
    // Display error message to user
    var errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        var errorText = errorMessage.querySelector('.error-text');
        if (errorText) {
            errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
        }
        errorMessage.style.display = 'block';
    }
    // Reset recording status
    var recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
        recordingIndicator.textContent = 'Ready to record';
        recordingIndicator.className = 'status-indicator ready';
    }
}

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
    }
}

function onPromptRequest(args) {
    if (!args.prompt.trim() || !aiAssistView) return;

    var defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiAssistView.addPromptResponse(defaultResponse, true);
}