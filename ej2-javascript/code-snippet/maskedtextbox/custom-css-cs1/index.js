// initializes the MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox({
    // sets mask format to the MaskedTextBox
    mask: '00000',
    value: "42648",
    placeholder: 'Enter User ID :',
    floatLabelType: 'Always',
    cssClass: 'e-style',
    focus: function(args) {
        //sets cursor position at start of MaskedTextBox
        args.selectionEnd= args.selectionStart;
    }
});

mask.appendTo('#mask1');
