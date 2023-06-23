import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox({
    // sets mask format to the MaskedTextBox
    mask: '00000',
    value: "42648",
    placeholder: 'Enter User ID',
    floatLabelType: 'Always',
    cssClass: 'e-style',
    focus: function(args) {
        //sets cursor position at start of MaskedTextBox
        args.selectionEnd= args.selectionStart;
    }
});

mask.appendTo('#mask1');