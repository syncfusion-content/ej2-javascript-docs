// initializes the MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox({
        // sets mask format to the MaskedTextBox
        mask: '000-000-0000',
        placeholder: 'MaskedTextBox',
        floatLabelType: 'Always'
});

mask.appendTo('#mask');

