// initializes the First MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox({
  // Default MaskedTextBox
  mask: '00000-00000',
  value: '93828-3213',
  placeholder: 'Default cursor position',
  floatLabelType: 'Always'
});

mask.appendTo('#mask1');

// initializes the Second MaskedTextBox component
var mask1 = new ej.inputs.MaskedTextBox({
  // sets mask format to the MaskedTextBox
  mask: '00000-00000',
  value: '83929-4343',
  placeholder: 'Cursor positioned at start',
  floatLabelType: 'Always',
  focus: function(args) {
    //sets cursor position at start of MaskedTextBox
    args.selectionEnd = args.selectionStart = 0;
  }
});

mask1.appendTo('#mask2');

// initializes the Third MaskedTextBox component
var mask2 = new ej.inputs.MaskedTextBox({
  // sets mask format to the MaskedTextBox
  mask: '00000-00000',
  value: '83929-3213',
  placeholder: 'Cursor positioned at end',
  floatLabelType: 'Always',
  focus: function(args) {
    //sets cursor position at end of MaskedTextBox
    args.selectionStart = args.selectionEnd = args.maskedValue.length;
  }
});

mask2.appendTo('#mask3');

// initializes the Fourth MaskedTextBox component
var mask3 = new ej.inputs.MaskedTextBox({
  // sets mask format to the MaskedTextBox
  mask: '+1 000-000-0000',
  value: '234-432-432',
  placeholder: 'Cursor at specified position',
  floatLabelType: 'Always',
  focus: function(args) {
    //sets cursor at specified position
    args.selectionStart = 3;
    args.selectionEnd = 3;
  }
});

mask3.appendTo('#mask4');

