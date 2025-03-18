
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    buttonSettings: {
        content: 'Start',
        stopContent: 'Stop',
        iconCss: 'e-icons e-play',
        stopIconCss: 'e-icons e-pause',
        iconPosition: 'Right',
        isPrimary: true
    },
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
    placeholder: 'Transcribed text will be shown here...'
});
textareaObj.appendTo('#textareaInst');