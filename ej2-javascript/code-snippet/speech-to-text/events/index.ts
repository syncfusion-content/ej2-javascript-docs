import { SpeechToText, TextArea, TranscriptChangedEventArgs, StopListeningEventArgs, StartListeningEventArgs, ErrorEventArgs } from "@syncfusion/ej2-inputs";

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    created: ()=>{
        //your required action here
    },
    onStop: (args: StopListeningEventArgs) => {
        //your required action here
    },
    onStart: (args: StartListeningEventArgs) => {
        //your required action here
    },
    onError: (event: ErrorEventArgs) => {
        //your required action here
    },
    transcriptChanged: (args: TranscriptChangedEventArgs) => {
        //your required action here
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');
