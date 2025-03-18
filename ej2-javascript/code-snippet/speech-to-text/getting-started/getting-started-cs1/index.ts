import { SpeechToText, TextArea, TranscriptChangedEventArgs } from "@syncfusion/ej2-inputs";

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    transcriptChanged: (args: TranscriptChangedEventArgs) => {
        textareaObj.value = args.transcript;
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

const textareaObj: TextArea = new TextArea({
    rows: 5,
    cols: 50,
    value: '',
    resizeMode: 'None',
    placeholder: 'Transcribed text will be shown here...'
});
textareaObj.appendTo('#textareaInst');