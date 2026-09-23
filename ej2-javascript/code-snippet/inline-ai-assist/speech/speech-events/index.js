ej.base.enableRipple(true);

var lastTranscript = '';
var isAccepted = false;

// Updates the status panel when speech recognition begins
function onSpeechStart(args) {
    var recordingStatus = document.getElementById('recordingStatus');
    if (recordingStatus) {
        recordingStatus.textContent = 'Recording...';
        recordingStatus.className = 'status-indicator recording';
    }
    var errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Resets the status and displays the captured transcript after recognition stops
function onSpeechStop(args) {
    var recordingStatus = document.getElementById('recordingStatus');
    if (recordingStatus) {
        recordingStatus.textContent = 'Ready to record';
        recordingStatus.className = 'status-indicator ready';
    }
    var transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay && lastTranscript) {
        transcriptDisplay.textContent = lastTranscript;
        transcriptDisplay.style.fontStyle = 'normal';
    }
    setTimeout(function () {
        lastTranscript = '';
        if (transcriptDisplay) {
            transcriptDisplay.textContent = 'Waiting for speech input...';
        }
    }, 2000);
}

// Streams interim and final transcripts to the status panel during recognition
function onTranscriptChanged(args) {
    var currentTranscript = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
    var isFinal = args.isFinal || args.final || (args.result && args.result.isFinal) || false;

    if (currentTranscript) {
        lastTranscript = currentTranscript;
    }

    var transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay) {
        transcriptDisplay.textContent = currentTranscript;
        transcriptDisplay.style.fontStyle = isFinal ? 'normal' : 'italic';
    }
}

// Surfaces recognition errors in the status panel and resets the recording state
function onSpeechError(args) {
    var errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        var errorText = errorMessage.querySelector('.error-text');
        if (errorText) {
            errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
        }
        errorMessage.style.display = 'block';
    }
    var recordingStatus = document.getElementById('recordingStatus');
    if (recordingStatus) {
        recordingStatus.textContent = 'Ready to record';
        recordingStatus.className = 'status-indicator ready';
    }
}

// Initializes the Inline AI Assist control with speech-to-text events
var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#summarizeBtn',
    // Displays AI responses inline so users can Accept or Discard them
    responseMode: 'Inline',
    speechToTextSettings: {
        enable: true,
        onStart: onSpeechStart,
        onStop: onSpeechStop,
        transcriptChanged: onTranscriptChanged,
        onError: onSpeechError
    },
    promptRequest: function (args) {
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            inlineAIAssist.addResponse(defaultResponse, true);
        }, 1000);
    },
    responseSettings: {
        itemSelect: function (args) {
            if (args.command.label === 'Accept') {
                isAccepted = true;
                var editableText = document.getElementById('editableText');
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
var summarizeBtn = document.querySelector('#summarizeBtn');
if (summarizeBtn) {
    summarizeBtn.addEventListener('click', function () {
        inlineAIAssist.dataBind();
        inlineAIAssist.showPopup();
    });
}