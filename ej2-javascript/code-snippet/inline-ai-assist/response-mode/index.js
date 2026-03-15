ej.base.enableRipple(true);
var inlineAssist = new ej.interactivechat.inlineAIAssist({
    responseMode: 'Popup',
    promptRequest: function (args) {
        var prompt = args.prompt;
        setTimeout(function () {
            var sampleResponse = "**You asked:** " + prompt + "\n" +
                "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
                "In your real application, send the prompt to an AI service here.";
            inlineAssist.addResponse(sampleResponse, true);
        }, 1000);
    },
    popupWidth: '500px'
});
inlineAssist.appendTo('#defaultInlineAssist');
inlineAssist.showPopup();
var modeSelect = document.getElementById('responseMode');
if (modeSelect) {
    modeSelect.addEventListener('change', function () {
        inlineAssist.responseMode = this.value;
        inlineAssist.showPopup();
    });
}
