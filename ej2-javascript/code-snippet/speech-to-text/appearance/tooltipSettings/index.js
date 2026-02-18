
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    tooltipSettings: {
        position: 'BottomRight',
        content: 'Click the button to start recognition',
        stopContent: 'Click the button to stop recognition'
    },
    transcriptChanged: function (args) {
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