
var transcript = 'Hi, hello! How are you?';

// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    transcript: transcript,
    transcriptChanged: (args) => {
        textareaObj.value = speechToText.transcript;
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

var textareaObj = new ej.inputs.TextArea({
    rows: 5,
    cols: 50,
    value: speechToText.transcript,
    resizeMode: 'None',
    placeholder: 'Transcribed text will be shown here...'
});
textareaObj.appendTo('#textareaInst');