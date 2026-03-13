ej.base.enableRipple(true);

var inlineAssist = new ej.interactivechat.InlineAIAssist({
    relateTo: '#defaultInlineAssist',
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

