ej.base.enableRipple(true);

var normalTextBox= new ej.inputs.TextBox({
    placeholder: 'Enter the text',
    floatLabelType: 'Never',
  });
  normalTextBox.appendTo('#normal');
  var normalFloatTextBox= new ej.inputs.TextBox({
    placeholder: 'Enter the text',
    floatLabelType: 'Auto',
  });
  normalFloatTextBox.appendTo('#normalFloat');
  var normalIconTextBox= new ej.inputs.TextBox({
    placeholder: 'Enter the text',
    floatLabelType: 'Auto',
    created: function () {
      normalIconTextBox.addIcon('append', 'e-date-icon');
    },
  });
  normalIconTextBox.appendTo('#normalIcon');
  var smallTextBox= new ej.inputs.TextBox({
    placeholder: 'Enter the text',
    floatLabelType: 'Never',
    cssClass: "e-small"
  });
  smallTextBox.appendTo('#small');
  var smallFloatTextBox= new ej.inputs.TextBox({
    placeholder: 'Enter the text',
    floatLabelType: 'Auto',
    cssClass: "e-small"
  });
  smallFloatTextBox.appendTo('#smallFloat');
  var smallIconTextBox= new ej.inputs.TextBox({
    placeholder: 'Enter the text',
    floatLabelType: 'Auto',
    cssClass: "e-small",
    created: function () {
      smallIconTextBox.addIcon('append', 'e-date-icon');
    },
  });
  smallIconTextBox.appendTo('#smallIcon');

