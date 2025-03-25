import { SpeechToText, TextArea, TranscriptChangedEventArgs } from "@syncfusion/ej2-inputs";

const transcript = 'Hi, hello! How are you?';

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    transcript: transcript,
    transcriptChanged: (args: TranscriptChangedEventArgs) => {
        textareaObj.value = speechToText.transcript;
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

var textareaObj: TextArea = new TextArea({
    rows: 5,
    cols: 50,
    value: speechToText.transcript,
    resizeMode: 'None',
    placeholder: 'Transcribed text will be shown here...'
});
textareaObj.appendTo('#textareaInst');