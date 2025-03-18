
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    created: ()=>{
        //your required action here
    },
    onStop: (args) => {
        //your required action here
    },
    onStart: (args) => {
        //your required action here
    },
    onError: (event) => {
        //your required action here
    },
    transcriptChanged: (args) => {
        //your required action here
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