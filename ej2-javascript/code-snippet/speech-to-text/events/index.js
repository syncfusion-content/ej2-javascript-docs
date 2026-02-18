
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    created: function (){
        //your required action here
    },
    onStop: function (args) {
        //your required action here
    },
    onStart: function (args) {
        //your required action here
    },
    onError: function (event) {
        //your required action here
    },
    transcriptChanged: function (args) {
        //your required action here
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');
