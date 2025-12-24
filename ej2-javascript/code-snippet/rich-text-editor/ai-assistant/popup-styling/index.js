// initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantPromptRequest: function (event) {
        setTimeout(function () {
            editor.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
            editor.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
        }, 5000);
    },
});

// render initialized Rich Text Editor
editor.appendTo('#editor');