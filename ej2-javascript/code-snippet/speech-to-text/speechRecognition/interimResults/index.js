
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    allowInterimResults: false,
    transcriptChanged: (args) => {
        textareaObj.value = args.transcript;
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

var textareaObj = new ej.inputs.TextArea({
    rows: 5,
    cols: 50,
    value: '',
    resizeMode: 'None',
    placeholder: 'Transcript will be displayed here once speech recognition is complete.'
});
textareaObj.appendTo('#textareaInst');