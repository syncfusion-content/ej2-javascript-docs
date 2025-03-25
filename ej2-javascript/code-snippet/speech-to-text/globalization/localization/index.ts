import { SpeechToText, TextArea, TranscriptChangedEventArgs } from "@syncfusion/ej2-inputs";
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'de': {
        "speech-to-text": {
            "abortedError": "Die Spracherkennung wurde abgebrochen.",
            "audioCaptureError": "Kein Mikrofon erkannt. Stellen Sie sicher, dass Ihr Mikrofon angeschlossen ist.",
            "defaultError": "Ein unbekannter Fehler ist aufgetreten.",
            "networkError": "Netzwerkfehler aufgetreten. Überprüfen Sie Ihre Internetverbindung.",
            "noSpeechError": "Keine Sprache erkannt. Bitte sprechen Sie in das Mikrofon.",
            "notAllowedError": "Mikrofonzugriff verweigert. Erlauben Sie Mikrofonberechtigungen.",
            "serviceNotAllowedError": "Der Spracherkennungsdienst ist in diesem Kontext nicht erlaubt.",
            "unsupportedBrowserError": "Der Browser unterstützt die SpeechRecognition API nicht.",
            "startAriaLabel": "Drücken Sie, um zu sprechen und Ihre Worte zu transkribieren",
            "stopAriaLabel": "Drücken Sie, um das Sprechen zu beenden und die Transkription zu stoppen",
            "startTooltipText": "Zuhören starten",
            "stopTooltipText": "Zuhören beenden"
        }
    }
});

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    locale: 'de',
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