var defaultRTE = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    }
});
defaultRTE.appendTo('#defaultRTE');
document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        defaultRTE.focusIn();
    }
};

