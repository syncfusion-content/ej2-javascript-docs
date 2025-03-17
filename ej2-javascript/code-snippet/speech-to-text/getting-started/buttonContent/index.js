
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    buttonSettings: {
        content: 'Start Listening',
        stopContent: 'Stop Listening'
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');
