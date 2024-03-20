// Initialize the TextArea control.
var textareaObj = new ej.inputs.TextArea({
    locale: 'de-DE',
    floatLabelType: 'Auto'
});

// Load culture for textarea
ej.base.L10n.load({
    'de-DE': {
        'textarea': {
            "placeholder": "Geben Sie Ihre Kommentare ein"
        }
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');
