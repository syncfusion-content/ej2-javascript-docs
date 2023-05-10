var defaultRTE = new ej.richtexteditor.RichTextEditor({
    editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|', 'Undo', 'Redo']
    }
});
defaultRTE.appendTo('#defaultRTE');
document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        defaultRTE.focusIn();
    }
};


