// initialize Rich Text Editor component
 var defaultRTE = new ej.richtexteditor.RichTextEditor({
    height: 340,
    iframeSettings: {
        enable: true,
        attributes: {
            readonly: 'readonly'
        }
    }
});

// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');

