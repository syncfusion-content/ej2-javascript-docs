import {TextBox } from '@syncfusion/ej2-inputs';
/**
 *   Sample for CSS input boxes.
 */

let normalTextBox: TextBox = new TextBox({
  placeholder: 'Enter the text',
  floatLabelType: 'Never',
});
normalTextBox.appendTo('#normal');
let normalFloatTextBox: TextBox = new TextBox({
  placeholder: 'Enter the text',
  floatLabelType: 'Auto',
});
normalFloatTextBox.appendTo('#normalFloat');
let normalIconTextBox: TextBox = new TextBox({
  placeholder: 'Enter the text',
  floatLabelType: 'Auto',
  created: function () {
    normalIconTextBox.addIcon('append', 'e-date-icon');
  },
});
normalIconTextBox.appendTo('#normalIcon');
let smallTextBox: TextBox = new TextBox({
  placeholder: 'Enter the text',
  floatLabelType: 'Never',
  cssClass: "e-small"
});
smallTextBox.appendTo('#small');
let smallFloatTextBox: TextBox = new TextBox({
  placeholder: 'Enter the text',
  floatLabelType: 'Auto',
  cssClass: "e-small"
});
smallFloatTextBox.appendTo('#smallFloat');
let smallIconTextBox: TextBox = new TextBox({
  placeholder: 'Enter the text',
  floatLabelType: 'Auto',
  cssClass: "e-small",
  created: function () {
    smallIconTextBox.addIcon('append', 'e-date-icon');
  },
});
smallIconTextBox.appendTo('#smallIcon');
