
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
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');
