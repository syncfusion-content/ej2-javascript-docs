

// First TextBox without an icon
let textIconAppend = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    created: () => {
      textIconAppend.addIcon('append', 'e-date-icon');
    },
  });
  textIconAppend.appendTo('#textIconAppend');
  
  // Second TextBox with an icon
  let textIconPrepend = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    created: () => {
      textIconPrepend.addIcon('prepend', 'e-date-icon');
    },
  });
  textIconPrepend.appendTo('#textIconPrepend');
  
  let textIconAppendPrepend = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    created: () => {
      textIconAppendPrepend.addIcon('prepend', 'e-date-icon');
      textIconAppendPrepend.addIcon('append', 'e-chevron-down-fill');
    },
  });
  textIconAppendPrepend.appendTo('#textIconAppendPrepend');
  
  // First TextBox without an icon
  let textFloatIconAppend = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    floatLabelType: 'Auto',
    created: () => {
      textFloatIconAppend.addIcon('append', 'e-date-icon');
    },
  });
  textFloatIconAppend.appendTo('#textFloatIconAppend');
  
  // Second TextBox with an icon
  let textFloatIconPrepend = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    floatLabelType: 'Auto',
    created: () => {
      textFloatIconPrepend.addIcon('prepend', 'e-date-icon');
    },
  });
  textFloatIconPrepend.appendTo('#textFloatIconPrepend');
  
  let textFloatIconAppendPrepend = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    floatLabelType: 'Auto',
    created: () => {
      textFloatIconAppendPrepend.addIcon('prepend', 'e-date-icon');
      textFloatIconAppendPrepend.addIcon('append', 'e-chevron-down-fill');
    },
  });
  textFloatIconAppendPrepend.appendTo('#textFloatIconAppendPrepend');
  