// initialize Rich Text Editor component
var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        popupMaxHeight: 500,
        popupWidth: 500
    }
});

// render initialized Rich Text Editor
editor.appendTo('#editor');