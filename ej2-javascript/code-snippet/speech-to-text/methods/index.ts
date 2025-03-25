import { SpeechToText, TextArea, TranscriptChangedEventArgs } from "@syncfusion/ej2-inputs";
import { Button } from '@syncfusion/ej2-buttons';

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    transcriptChanged: (args: TranscriptChangedEventArgs) => {
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

let startButton: Button = new Button({
    content: 'Start Listening',
});
startButton.appendTo('#startListening');
startButton.element.onclick = () => {
    speechToText.startListening();
};

let stopButton: Button = new Button({
    content: 'Stop Listening',
});
stopButton.appendTo('#stopListening');
stopButton.element.onclick = () => {
    speechToText.stopListening();
};
