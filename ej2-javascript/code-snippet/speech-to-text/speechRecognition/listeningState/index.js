
// Initializes the SpeechToText control
var speechToText = new ej.inputs.SpeechToText({
    onStop: function (args) {
        updateListeningState(args.listeningState);
    },
    onStart: function (args) {
        updateListeningState(args.listeningState);
    },
    listeningState: ej.inputs.SpeechToTextState.Inactive
});

// Render initialized SpeechToText.
speechToText.appendTo('#speechtotext_default');

function updateListeningState(state) {
    document.getElementById("status-text").innerText = state;

    var statusBox = document.getElementById("status-box-container");
    var waveform = document.getElementById("waveform-item");
    var instructionText = document.getElementById("instruction-text");

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