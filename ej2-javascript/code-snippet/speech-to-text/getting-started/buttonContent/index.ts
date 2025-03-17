import { SpeechToText } from "@syncfusion/ej2-inputs";

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    buttonSettings: {
        content: 'Start Listening',
        stopContent: 'Stop Listening'
    }
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');
