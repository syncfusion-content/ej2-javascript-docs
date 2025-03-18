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
        textareaObj.value = args.transcript;
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

var textareaObj: TextArea = new TextArea({
    rows: 5,
    cols: 50,
    value: '',
    resizeMode: 'None',
    placeholder: 'Transcribed text will be shown here...'
});
textareaObj.appendTo('#textareaInst');