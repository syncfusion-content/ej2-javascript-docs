var L10n = ej.base.L10n;

// Load `German` culture to override spin buttons tooltip text
L10n.load({
    'de': {
        'numerictextbox': {
            incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
        }
    },

});

var numeric = new ej.inputs.NumericTextBox({
    // sets `German` culture using the culture value 'de'
    locale: 'de',
    // sets value to the NumericTextBox
    value: 10
});

// renders initialized NumericTextBox
numeric.appendTo('#numeric');

