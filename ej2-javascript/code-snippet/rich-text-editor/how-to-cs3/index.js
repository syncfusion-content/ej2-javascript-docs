var customHTMLModel = { // formatter is used to configure the custom key
    keyConfig: {
        'insert-link': 'ctrl+q', // confite the desired key
    }
};

var defaultRTE = new ej.richtexteditor.RichTextEditor({
    formatter: new ej.richtexteditor.HTMLFormatter(customHTMLModel),
});
defaultRTE.appendTo('#defaultRTE');

