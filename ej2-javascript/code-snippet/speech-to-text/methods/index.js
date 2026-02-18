
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
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

var startButton = new ej.buttons.Button({
    content: 'Start Listening',
});
startButton.appendTo('#startListening');
startButton.element.onclick = function () {
    speechToText.startListening();
};

var stopButton = new ej.buttons.Button({
    content: 'Stop Listening',
});
stopButton.appendTo('#stopListening');
stopButton.element.onclick = function () {
    speechToText.stopListening();
};
