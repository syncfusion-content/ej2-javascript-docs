// initializes the MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox({
    // sets custom characters collection for non-mask elements 'P' and 'M'
    customCharacters: {
        P: 'P,A,a,p',
        M: 'M,m'
    },
    // sets mask format to the MaskedTextBox
    mask: '00:00 >PM',
    placeholder: 'Time (ex: 10:00 PM, 10:00 AM)',
    floatLabelType: 'Always'
});

mask.appendTo('#mask');

