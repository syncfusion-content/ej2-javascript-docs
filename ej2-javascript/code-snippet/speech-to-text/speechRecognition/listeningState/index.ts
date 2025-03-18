import { SpeechToText, SpeechToTextState, StartListeningEventArgs, StopListeningEventArgs } from "@syncfusion/ej2-inputs";

// Initializes the SpeechToText control
const speechToText: SpeechToText = new SpeechToText({
    onStop: (args: StopListeningEventArgs) => {
        updateListeningState(args.listeningState);
    },
    onStart: (args: StartListeningEventArgs) => {
        updateListeningState(args.listeningState);
    },
    listeningState: SpeechToTextState.Inactive
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

function updateListeningState(state: string) {
    var statusTextElement = document.getElementById("status-text")
    if (statusTextElement) { statusTextElement.innerText = state; }

    var statusBox = document.getElementById("status-box-container");
    var waveform = document.getElementById("waveform-item");
    var instructionText = document.getElementById("instruction-text");

    if (statusBox && waveform && instructionText) {
        if (state === "Listening") {
            statusBox.className = "status-box listening";
            waveform.style.display = "flex";
            instructionText.innerText = "Listening... Speak now!";
        } else if (state === "Stopped") {
            statusBox.className = "status-box stopped";
            waveform.style.display = "none";
            instructionText.innerText = "Recognition Stopped.";
        } else {
            statusBox.className = "status-box inactive";
            waveform.style.display = "none";
            instructionText.innerText = "Click the button to start listening.";
        }
    }
}